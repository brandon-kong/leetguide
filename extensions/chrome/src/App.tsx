import './App.css'

import { Button, H4, Navbar } from '@/components'

function App() {
  return (
    <>
      <Navbar />

      <main className='h-[340px] flex flex-col gap-2 items-center justify-center'>
        <H4>
          You are not logged in
        </H4>
        <Button>
        Sign In
      </Button>
      </main>  
      
    </>
  )
}

export default App
