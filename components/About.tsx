import Image from 'next/image'
import data from '../public/data.json'

import Banner from './Banner'
import ValueCard from './ValueCard'
import FaqDropdown from './FaqDropdown'
import SubHeading from './Typography/SubHeading'
import Feature from './Feature'
import { useMediaContext } from '../providers/MediaProvider'

import rightArrow from '../public/assets/patterns/right-arrow.svg'
import circle from '../public/assets/patterns/circle.svg'
import leftDownwardArrow from '../public/assets/patterns/left-downward-arrow.svg'

export default function About() {
  const { format } = useMediaContext()
  return (
    <>
      <Banner text='About' bgImage='about' />
      <main>
        <section
          id='about'
          className='about-card-wrapper flex flex-col gap-y-[120px] mb-[120px] w-full tablet:mx-auto desktop:max-w-[1440px]'
        >
          {data['about-cards'].map((entry, i) => (
            <div
              key={entry.id}
              className='home-feature-wrapper w-full tablet:mx-auto desktop:max-w-[1440px] desktop:overflow-x-hidden'
            >
              <Feature
                key={entry.id}
                title={entry.title}
                description={entry.description}
                image={entry.image}
                alt={entry.alt}
                pattern={
                  format !== 'mobile' ? (
                    <>
                      {i === 0 ? (
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
                        <>
                          <Image
                            src={circle}
                            alt='faded white cirle'
                            width={445}
                            height={445}
                            className='absolute desktop:left-[-23%] tablet:left-[-350px]'
                          />
                          <Image
                            src={rightArrow}
                            alt='rightward pointing yellow arrow'
                            width={452}
                            height={151}
                            className='absolute top-0 desktop:left-0 tablet:left-[-100px]'
                          />
                        </>
                      )}
                    </>
                  ) : (
                    <></>
                  )
                }
                styling={`desktop:flex ${
                  i % 2 ? '' : 'desktop:flex-row-reverse'
                }`}
              />
            </div>
          ))}
        </section>

        <section
          id='values'
          className='flex flex-col gap-y-16 mb-[145px] tablet:max-w-[457px] tablet:mx-auto desktop:max-w-[1110px] desktop:justify-between'
        >
          <SubHeading styling='mb-16'>Our values</SubHeading>
          <div className='values-wrapper desktop:flex'>
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
          id='faqs'
          className='tablet:max-w-[689px] tablet:mx-auto desktop:max-w-[1110px] desktop:mb-[160px]'
        >
          <SubHeading styling='mb-12'>FAQs</SubHeading>
          {data.faqs.map((entry) => (
            <div key={entry.id} className='faq-wrapper mb-12 desktop:flex'>
              <h3 className='font-space font-[700] text-[24px] text-dark-navy text-center leading-7 tracking-[-1.07px] mb-8 desktop:w-full desktop:max-w-[350px]'>
                {entry.heading}
              </h3>
              <div
                key={entry.id}
                className='faqs-wrapper flex flex-col gap-y-4 desktop:w-full desktop:max-w-[730px]'
              >
                {entry.entries.map((entry) => (
                  <FaqDropdown key={entry.id} entry={entry} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
