'use client';

import { BrandWithText, Button, Card, H2, H4, P } from '@/components'
import Link from 'next/link'

import { useSearchParams } from 'next/navigation';
import { appendQueryParams } from '@/util/url';

import type { Extension } from '@/types/extension';
type Permission = {
  name: string
  description: string
}

const permissions: Permission[] = [
  {
    name: 'Basic information about your account',
    description: 'This includes your username and email address.'
  },
  {
    name: 'Progress',
    description: 'This includes your progress that you have saved'
  },
]

export default function Authorize() {
  const searchParams = useSearchParams();

  const authorize = () => {
    // fake authorize for now
    
    // get the authorization code from the server
    const code = '1234567890';

    // redirect to extension if extensionId is present
    const params: { [key: string]: string } = {}
    searchParams.forEach((value, key) => {
      params[key] = value;
    })

    const { type, extension, extensionId } = params as { type: 'extension', extension: Extension, extensionId: string };
 
    if (type === 'extension') {
      switch (extension) {
        case 'chrome':
          window.location.href = `chrome-extension://${extensionId}/callback?authorized=true&code=${code}`;
          return;
      }
      return;
    }

    window.location.href = 'https://leetguide.com';
  };
  
  return (
    <main className="min-h-screen py-20 px-content-padding-x w-full max-w-lg mx-auto flex flex-col items-center justify-center">
      <div
      className={'w-full flex flex-col items-center gap-8'}
      >
        <div
        className={'flex items-center gap-10'}
        >
          <Link href={'/'}>
            <BrandWithText size={'lg'} />
          </Link>

          <hr className={'w-[1px] h-12 bg-secondary-600/80'} />

          <div className={'font-bold select-none h-12 w-12 bg-primary-200 rounded-full flex items-center justify-center text-lg'}>
            JD
          </div>
        </div>
        
        <H2
        >Authorize with leetguide
        </H2>

        <P
        className={'text-secondary-900'}
        >
          leetguide would like permission to authorize with your account.
        </P>

        <hr className={'w-full'} />

        <div
        className={'w-full flex flex-col items-center gap-4'}
        >
          <H4
          className={'w-full text-left'}
          >
            Review permissions
          </H4>
          <Card className={'w-full flex flex-col items-center gap-4 py-4 px-0'}>
            
            {permissions.map((permission, index) => (
              <>
              <div
              key={index}
              className={'w-full py-2 px-6 flex flex-row justify-between items-center gap-4'}
              >
                <div>
                  <P className={'font-semibold'}>{permission.name}</P>
                  <P className={'text-secondary-900'}>{permission.description}</P>
                </div>
                <div
                className={'w-4 h-4 rounded-full bg-primary-500 ring ring-primary-400 ring-offset-2'}
                />
              </div>
              
              {
              index !== permissions.length - 1 && (
                <hr className={'w-full border-primary-300'} />
              )}
              </>
            ))}
          </Card>
        </div>

        <hr className={'w-full'} />

        <div
        className={'w-full flex flex-row-reverse justify-center items-center gap-4'}
        >
          <Button onClick={authorize} variant={'primary'}>Allow</Button>
          <Button href={'/'} variant={'secondary'}>Cancel</Button>
        </div>
        
      </div>
      

  
    </main>
  )
}
