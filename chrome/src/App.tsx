import './App.css'

import { useEffect, useState } from 'react';

import { Button, H4, Navbar } from '@/components'
import UnauthenticatedView from './components/layout/unauthenticated';

function App() {
  
  const [code, setCode] = useState<string>('')

  useEffect(() => {
    chrome.storage.local.get(['code'], (result) => {
      if (result.code) {
        setCode(result.code)
      }
    })
  }, [setCode])

  const authenticated = code !== ''

  const logout = () => {
    setCode(() => {
      return ''
    });
    chrome.runtime.sendMessage({ action: 'logout' })
    
  }
  
  return (
    <>
      <Navbar />

      {
        !authenticated ? (
          <UnauthenticatedView />
        ) : (
          <main className='h-body-height flex flex-col gap-4 items-center justify-center'>
            <H4>
              You are signed in.
            </H4>

            <Button variant={'secondary'} onClick={logout}>
              Sign Out
            </Button>
          </main>
        )
      }
      
    </>
  )
}

export default App
