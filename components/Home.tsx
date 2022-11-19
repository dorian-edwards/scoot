import Button from './Button'
import Overview from './Overview'
import PrimaryHeading from './Typography/PrimaryHeading'

import data from '../public/data.json'
import Feature from './Feature'

export default function HomePage() {
  return (
    <>
      <header className='header bg-home-mobile bg-no-repeat bg-cover bg-center min-h-[650px] tablet:bg-home-tablet pt-[115px] px-8 mb-[120px]'>
        <PrimaryHeading>Scooter Sharing Made Simple</PrimaryHeading>
        <p className='font-lexend text-[15px] leading-[25px] text-center text-white mb-[34px]'>
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you’re away!
        </p>
        <div className='button-wrapper flex justify-center'>
          <Button text='Get Scootin' />
        </div>
      </header>
      <main className='main'>
        <section
          id='overview'
          className='overview flex flex-col gap-y-12 mb-[120px]'
        >
          {data['how-to'].map((entry) => (
            <Overview
              key={entry.id}
              title={entry.title}
              description={entry.description}
              icon={entry.icon}
              alt={entry.alt}
            />
          ))}
        </section>
        <section
          id='features'
          className='flex flex-col gap-y-[120px] mb-[120px]'
        >
          {data['features'].map((entry) => (
            <div key={entry.id} className='home-feature-wrapper'>
              <Feature
                title={entry.title}
                description={entry.description}
                image={entry.image}
                alt={entry.alt}
              />
              <Button text='Learn more' type='button' styling='mx-auto mt-8' />
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
