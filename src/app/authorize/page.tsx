'use client';

import { BrandWithText, Button, Card, H2, H3, H4, Input, P } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

import { useSearchParams } from 'next/navigation';
import { appendQueryParams } from '@/util/url';

export default function Authorize() {
  const searchParams = useSearchParams();
  
  const calculateBaseUrl = (url: string) => {
    const params: { [key: string]: string } = {}
    searchParams.forEach((value, key) => {
      params[key] = value;
    })

    return appendQueryParams(url, params);
  }

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
  
  return (
    <main className="min-h-screen py-20 w-full max-w-lg mx-auto flex flex-col items-center justify-center">
      <div
      className={'w-full flex flex-col items-center gap-8'}
      >
        <Link href={'/'}>
            <BrandWithText />
        </Link>
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
                className={'w-4 h-4 rounded-full bg-primary-500 ring ring-primary-400 ring-offset-2 animate-pulse'}
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
          <Button href={calculateBaseUrl('/authorize')} variant={'primary'}>Allow</Button>
          <Button href={'/'} variant={'secondary'}>Cancel</Button>
        </div>
        
      </div>
      

  
    </main>
  )
}
