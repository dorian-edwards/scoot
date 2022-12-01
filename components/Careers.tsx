import Image from 'next/image'

import Banner from './Banner'
import Button from './Button'
import Feature from './Feature'
import JobCard from './JobCard'
import ValueCard from './ValueCard'
import SubHeading from './Typography/SubHeading'

import { useMediaContext } from '../providers/MediaProvider'

import circle from '../public/assets/patterns/circle.svg'
import leftDownwardArrow from '../public/assets/patterns/left-downward-arrow.svg'

import data from '../public/data.json'

export default function Careers() {
  const { format } = useMediaContext()
  return (
    <>
      <Banner text='Careers' bgImage='careers-location' />
      <main>
        <section
          id='careers'
          className='mb-[120px] w-full desktop:max-w-[1440px] tablet:mx-auto'
        >
          <div className='home-feature-wrapper w-full tablet:mx-auto desktop:max-w-[1440px] desktop:overflow-x-hidden'>
            <Feature
              image={data.careers.image}
              alt={data.careers.alt}
              pattern={
                format !== 'mobile' ? (
                  <>
                    <Image
                      src={circle}
                      alt='faded white cirle'
                      width={445}
                      height={445}
                      className='absolute right-[-350px]'
                    />
                    <Image
                      src={leftDownwardArrow}
                      alt='yellow arrow pointing left'
                      width={741}
                      height={151}
                      className='absolute desktop:top-[50%] desktop:right-[-3%] tablet:top-[298px] tablet:right-0'
                    />
                  </>
                ) : (
                  <></>
                )
              }
              title={data.careers.title}
              description={data.careers.description}
              styling='desktop:flex desktop:flex-row-reverse'
              addOns={
                <Button text='Say hello' styling='mx-auto mt-8 desktop:mx-0' />
              }
            />
          </div>
        </section>

        <section
          id='why-join'
          className='flex flex-col gap-y-16 mb-[145px] tablet:max-w-[457px] tablet:mx-auto desktop:max-w-[1110px] desktop:justify-between'
        >
          <SubHeading>Why join us?</SubHeading>
          <div className='values-wrapper flex flex-col gap-y-[55px] desktop:flex-row'>
            {data.values.map((entry) => (
              <ValueCard
                key={entry.id}
                id={entry.id}
                title={entry.title}
                description={entry.description}
                image={entry.image}
                alt={entry.alt}
                number={entry.number}
              />
            ))}
          </div>
        </section>

        <section
          id='staff'
          className='flex flex-col gap-y-4 px-8 mb-[120px] tablet:max-w-[689px] tablet:mx-auto desktop:max-w-[1110px]'
        >
          {data.positions.map((position) => (
            <JobCard
              key={position.id}
              position={position.position}
              location={position.location}
            />
          ))}
        </section>
      </main>
    </>
  )
}
