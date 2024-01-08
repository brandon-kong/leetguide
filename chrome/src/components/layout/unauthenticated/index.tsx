import { Button, H4 } from "@/components";

export default function UnauthenticatedView() {

    const toSignInPage = () => {
        chrome.runtime.sendMessage({ action: 'openSignInPage' })
      }
      
    return (
        <main className='h-body-height flex flex-col gap-4 items-center justify-center'>
        <H4>
            You are not signed in.
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
    )
}