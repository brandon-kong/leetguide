import { Button, P } from '@components';
import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'; 

import { v4 } from 'uuid';

export default function AuthenticatedView()
{ 
    const [key, setKey] = useState<string>(v4())
    const [hasStarted, setHasStarted] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(15);
    const [time, setTime] = useState<number>(15 * 60);

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    //const { logout } = useAuth()

    const startTimer = () => {
      setIsPlaying(true);
      setHasStarted(true);

      chrome.runtime.sendMessage({
        type: 'SET_TIMER_STATE',
        state: { time, isPlaying, hasStarted },
      });
    }

    const pauseTimer = () => {
      setIsPlaying(false);

      chrome.runtime.sendMessage({
        type: 'SET_TIMER_STATE',
        state: { time, isPlaying, hasStarted },
      });
    }

    const stopTimer = () => {
      setIsPlaying(false);

      chrome.runtime.sendMessage({
        type: 'SET_TIMER_STATE',
        state: { time, isPlaying, hasStarted },
      });
    }

    const resetTimer = () => {
      setKey(v4());
      setIsPlaying(false);
      setHasStarted(false);
      setTime(15 * 60);
      setDuration(15);

      chrome.runtime.sendMessage({
        type: 'SET_TIMER_STATE',
        state: { time, isPlaying, hasStarted },
      });
    }

    // get time from chrome storage

    useEffect(() => {
      
      chrome.runtime.sendMessage({ type: 'GET_TIMER_STATE' }, (state) => {
        setDuration(state.time / 60);
        setTime(state.time);
        setIsPlaying(state.isPlaying);
        setHasStarted(state.hasStarted);

        if (state.hasStarted) {
          setKey(v4());
        }
      });

    }, [])

    // save time to chrome storage

    const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;

      setDuration(value);
      setTime(value * 60);

      chrome.runtime.sendMessage({
        type: 'SET_TIMER_STATE',
        state: { time, isPlaying, hasStarted },
      });
    }

    return (
      <main className='h-body-height grid grid-cols-4 grid-rows-2 p-content-padding gap-content-padding'>
        <div
        className={'bg-secondary col-span-2 row-span-1 rounded-xl'}
        >

        </div>

        <div
        className={'flex flex-col items-center justify-center bg-primary-100 col-span-2 row-span-2 rounded-xl'}
        >
          <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          duration={duration * 60} 

          colors={['#6c69bb', '#8789cd']}
          colorsTime={[60, 30]}

          onComplete={() => {
            stopTimer();
            setHasStarted(false);
            setKey(v4());

            return {
              newInitialRemainingTime: duration
            }
          }}  

          onUpdate={(remainingTime) => {
            setTime(remainingTime);
          
          }}

          >
            { ({ remainingTime,  }) => (
              isPlaying ? (
              <div
              className={'flex flex-col text-primary-700 items-center justify-center'}
              >
                <P
                className={'text-4xl'}
                >
                  { remainingTime % 60 === 0 ? remainingTime / 60 : remainingTime }
                </P>
                <P
                className={'text-xl'}
                >
                  { remainingTime % 60 === 0 ? (remainingTime / 60 !== 1 ? 'minutes' : 'minute') : 'seconds' }
                </P>
              </div>
              
              )
              : (
                <div
                className={'flex flex-col items-center justify-center'}
                >
                <input
                onChange={onInputChanged}
                value={hasStarted ? (remainingTime % 60 === 0 ? remainingTime / 60 : remainingTime) : ( duration )}
                className={'text-4xl text-primary-700 bg-transparent focus:outline-none w-full text-center'}
                />
                 <P
                className={'text-xl text-primary-700'}
                >
                  { remainingTime % 60 === 0 ? (remainingTime / 60 !== 1 ? 'minutes' : 'minute') : 'seconds' }
                </P>
                </div>
              )
            )}
          </CountdownCircleTimer>
            
          <div
          className={'flex items-center gap-2 mt-4'}
          >
            <Button
            size={'icon'}
            variant={'outline'} 
            onClick={hasStarted ? (isPlaying ? pauseTimer : startTimer) : () => {}}

            >
              <img src={isPlaying ? '/icons/pause.svg' : '/icons/resume.svg'}
              alt={'pause'}
              className={'h-5 w-5'}
              />
            </Button>

            <Button
            onClick={isPlaying ? stopTimer : startTimer}
            >
              
              <img src={isPlaying ? '/icons/square.svg' : '/icons/play.svg'}
              className={'h-3 w-3 mr-2'}
              alt={isPlaying ? 'stop' : 'play'}
              />
              
              {
                (isPlaying ? 'Stop' : 'Start')
              }
            </Button>

            <Button
            size={'icon'}
            variant={'outline'}
            onClick={resetTimer}
            >
              <img src={'/icons/rotate-cw.svg'}
              alt={'reset'}
              className={'h-5 w-5'}
              />
            </Button>
          </div>
        </div>

        <div
        className={'bg-secondary row-span-1 rounded-xl'}
        >

        </div>

        <div
        className={'bg-secondary row-span-1 rounded-xl'}
        >

        </div>
      </main>

    )
}