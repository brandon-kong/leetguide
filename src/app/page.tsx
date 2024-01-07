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
    className: 'col-span-1 md:col-span-2 lg:col-span-1 aspect-video aspect-auto md:aspect-auto lg:aspect-square'
  },
]

export default function Home() {
  return (
    <main className="w-full max-w-content-width mx-auto mt-20 p-content-padding lg:p-0">
      <LandingHeading
      className={'text-5xl text-center lg:text-left'}
      >Master the art of solving <br/> problems
      </LandingHeading>

      <P className={'mt-8 text-secondary-900 max-w-md text-center lg:text-left mx-auto lg:mx-0'}>
        LeetGuide is a free and open-source browser extension that helps 
        you track your LeetCode progress and offers curated resources to
        help you prepare for your next interview.
      </P>

      <div
      className={'flex justify-center lg:justify-start items-center mt-8'}
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
      className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'}
      >
        {landingCards.map((card, index) => (
          <LandingCard
          className={card.className}
          key={index}
          {...card}
          />
        ))}
      </div>
    </main>
  )
}
