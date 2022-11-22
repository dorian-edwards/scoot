import Button from './Button'
import Feature from './Feature'
import Overview from './Overview'
import { useMediaContext } from '../providers/MediaProvider'
import PrimaryHeading from './Typography/PrimaryHeading'

import data from '../public/data.json'

export default function HomePage() {
  const { format } = useMediaContext()
  return (
    <>
      <header className='header bg-home-mobile bg-no-repeat bg-cover bg-center min-h-[650px] tablet:bg-home-tablet desktop:bg-home-desktop pt-[115px] px-8 mb-[120px]'>
        <div className='tablet:max-w-[573px] tablet:mx-auto'>
          <PrimaryHeading>Scooter Sharing Made Simple</PrimaryHeading>
          <p className='font-lexend text-[15px] leading-[25px] text-center text-white mb-[34px]'>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <div className='button-wrapper flex justify-center'>
            <Button text='Get Scootin' />
          </div>
        </div>
      </header>
      <main className='main'>
        <section
          id='overview'
          className='overview flex flex-col gap-y-12 mb-[120px]'
        >
          <div className='desktop:flex desktop:max-w-[1110px] desktop:mx-auto desktop:gap-x-[30px]'>
            {data['how-to'].map((entry) => (
              <Overview
                key={entry.id}
                title={entry.title}
                description={entry.description}
                icon={entry.icon}
                alt={entry.alt}
              />
            ))}
          </div>
        </section>
        <section
          id='features'
          className='flex flex-col gap-y-[120px] mb-[120px]'
        >
          {data['features'].map((entry, i) => (
            <div
              key={entry.id}
              className='home-feature-wrapper w-full tablet:max-w-[573px] tablet:mx-auto desktop:max-w-[1110px]'
            >
              <Feature
                title={entry.title}
                description={entry.description}
                image={entry.image}
                alt={entry.alt}
                styling={`desktop:flex ${
                  i % 2 ? '' : 'desktop:flex-row-reverse'
                }`}
                addOns={
                  <Button
                    text='Learn More'
                    styling='mx-auto mt-8 desktop:mx-0'
                  />
                }
              />
              {format !== 'desktop' && (
                <Button
                  text='Learn more'
                  type='button'
                  styling='mx-auto mt-8'
                />
              )}
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
