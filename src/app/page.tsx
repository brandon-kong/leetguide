import { Button, H1, H2, H3, H4, LandingCard, LandingCardProps, LandingHeading, P } from '@/components'
import Image from 'next/image'

const landingCards: LandingCardProps[] = [
  {
    title: 'Learn',
    subtitle: 'Learn data structures and algorithms from scratch.',
    image: '/logos/google-chrome.png',
  },
  {
    title: 'Learn',
    subtitle: 'Learn data structures and algorithms from scratch.',
    image: '/logos/google-chrome.png',
  },
  {
    title: 'Learn',
    subtitle: 'Learn data structures and algorithms from scratch.',
    image: '/logos/google-chrome.png',
  },
]

export default function Home() {
  return (
    <main className="w-full max-w-content-width mx-auto mt-20">
      <LandingHeading
      className={''}
      >Master the art of solving <br/> problems
      </LandingHeading>

      <P className={'mt-8 text-secondary-900 max-w-md'}>
        LeetGuide is a free and open source platform for learning and practicing data structures and algorithms.
      </P>

      <div
      className={'flex items-center mt-8'}
      >
        <Button variant={'primary-light'} className={'mr-4'}>
          <Image src={'/logos/google-chrome.png'} alt={'Google Chrome'} width={20} height={20} className={'mr-2'} />
          Download Extension
        </Button>

        <Button variant={'secondary'} className={''}>
          Get Started
        </Button>
      </div>

      <div
      className={'grid grid-cols-1 md:grid-cols-3 gap-8 mt-20'}
      >
        {landingCards.map((card, index) => (
          <LandingCard
          key={index}
          {...card}
          />
        ))}
      </div>
    </main>
  )
}
