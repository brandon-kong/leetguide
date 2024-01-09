import { H4, Button } from "@/components"

import { useAuth } from "@/util/auth/context"

export default function AuthenticatedView()
{
    const { logout } = useAuth()

    return (
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