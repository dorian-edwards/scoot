import data from '../public/data.json'

import ValueCard from './ValueCard'
import FaqDropdown from './FaqDropdown'
import SubHeading from './Typography/SubHeading'
import Banner from './Banner'
import Feature from './Feature'

export default function About() {
  return (
    <>
      <header
        className={`bg-about-mobile tablet:bg-about-tablet desktop:bg-about-desktop mb-[72px] px-10`}
      >
        <h1 className='font-space text-[40px] text-center tablet:text-left max-w-[1100px] mx-auto text-white leading-10 tracking-[-1.79px] py-[60px] tablet:py-[72px] '>
          About
        </h1>
      </header>
      <main>
        <section
          id='about'
          className='about-card-wrapper flex flex-col gap-y-[120px] mb-[120px] tablet:max-w-[557px] tablet:mx-auto desktop:max-w-[1110px]'
        >
          {data['about-cards'].map((entry, i) => (
            <Feature
              key={entry.id}
              title={entry.title}
              description={entry.description}
              image={entry.image}
              alt={entry.alt}
              styling={`desktop:flex ${
                i % 2 ? '' : 'desktop:flex-row-reverse'
              }`}
            />
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
