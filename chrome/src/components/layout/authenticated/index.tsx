import { Button, H2 } from '@components';
import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'; 

export default function AuthenticatedView()
{ 
    const [duration, setDuration] = useState<number>(60);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    //const { logout } = useAuth()

    const startTimer = () => {
      setIsPlaying(true);
    }

    const stopTimer = () => {
      setIsPlaying(false);
    }

    return (
      <main className='h-body-height grid grid-cols-4 grid-rows-2 p-content-padding gap-content-padding'>
        <div
        className={'bg-secondary col-span-2 row-span-1 rounded-xl'}
        >

        </div>

        <div
        className={'flex flex-col items-center justify-center bg-secondary col-span-2 row-span-2 rounded-xl'}
        >
          <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={duration}
          colors={['#6c69bb', '#8789cd']}
          colorsTime={[60, 30]}
          >
            { ({ remainingTime,  }) => (
              isPlaying ? (
              <H2
              className={'text-6xl'}
              >
                { remainingTime }
              </H2>
              )
              : (
                <input
                onChange={(e) => { setDuration(parseInt(e.target.value))}}
                value={duration}
                className={'text-6xl bg-transparent focus:outline-none w-full text-center'}
                />
              )
            )}
          </CountdownCircleTimer>

          <div
          className={'flex items-center gap-2 mt-4'}
          >
            <Button
            size={'icon'}
            variant={'outline'} 
            >
              <img src={'/icons/pause.svg'}
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
                isPlaying ? 'Stop' : 'Start'
              }
            </Button>

            <Button
            size={'icon'}
            variant={'outline'}
            >
              <img src={'/icons/rotate-cw.svg'}
              alt={'pause'}
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