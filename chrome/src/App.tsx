import './App.css'

//import { getFullUrl } from './util/url'
import { Button, H4, Navbar } from '@/components'

function App() {
  
  const toSignInPage = () => {
    chrome.runtime.sendMessage({ action: 'openSignInPage' })
  }
  return (
    <>
      <Navbar />

      <main className='h-[340px] flex flex-col gap-4 items-center justify-center'>
        <H4>
          You are not logged in
        </H4>

        <div
        className={'flex flex-col gap-4'}
        >
          <Button
          onClick={toSignInPage}

          >
            Sign In
          </Button>

          <Button variant={'secondary'}>
            Continue as guest
          </Button>
        </div>
        
      </main>  
      
    </>
  )
}

export default App
