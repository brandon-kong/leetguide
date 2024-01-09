'use client';

import { BrandWithText, Button, H2, Input, P } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

import { useSearchParams } from 'next/navigation';
import { appendQueryParams } from '@/util/url';

export default function SignIn() {
  const searchParams = useSearchParams();
  
  const calculateBaseUrl = (url: string) => {
    const params: { [key: string]: string } = {}
    searchParams.forEach((value, key) => {
      params[key] = value;
    })

    return appendQueryParams(url, params);
  }
  
  return (
    <main className="min-h-screen py-20 px-content-padding-x w-full max-w-sm mx-auto flex flex-col items-center justify-center">
      <div
      className={'w-full flex flex-col items-center gap-8'}
      >
        <Link href={'/'}>
            <BrandWithText />
        </Link>
        <H2
        >Sign in to leetguide
        </H2>
      </div>
      

      <div
      className={'w-full flex flex-col justify-center items-center mt-8 space-y-4'}
      >
        <form
        className={'w-full space-y-4'}
        >
            <Input 
            type={'email'}
            placeholder={'Email'}
            className={'w-full'}
            />

            <Input 
            type={'password'}
            placeholder={'Password'}
            className={'w-full'}
            />
            
            <Button
            className={'w-full'}
            >
                Sign In
            </Button>
        </form>

        

        <div
        className={'flex items-center justify-center gap-2'}
        >
            <P>Don&apos;t have an account?</P>
            <Button href={calculateBaseUrl('/sign-up')} variant={'link'} className={'text-md'}>Create one</Button>

        </div>

        <div
        className={'flex items-center justify-center gap-3 w-full'}
        >
            <hr className={'w-full border-secondary-600'} />
            <P className={'text-center text-secondary-900'}>or</P>
            <hr className={'w-full border-secondary-600'} />
        </div>

        <Button variant={'outline'} className={'w-full'}>
          <Image src={'/logos/google-chrome.png'} alt={'Google Chrome'} width={20} height={20} className={'mr-2'} />
          Sign in with Google
        </Button>

        <Button variant={'outline'} className={'w-full'}>
          <Image src={'/logos/github.svg'} alt={'GitHub'} width={20} height={20} className={'mr-2'} />
          Sign in with GitHub
        </Button>
      </div>
    </main>
  )
}
