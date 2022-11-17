import data from '../public/data.json'
import AboutCard from './AboutCard'
import ValueCard from './ValueCard'
import FaqDropdown from './FaqDropdown'
import SubHeading from './Typography/Subheading'

export default function About() {
  return (
    <>
      <header className='bg-about-mobile mb-[72px]'>
        <h2 className='font-space text-[40px] text-center text-white leading-10 tracking-[-1.79px] px-8 py-[60px]'>
          About
        </h2>
      </header>
      <main>
        <section
          id='about'
          className='about-card-wrapper flex flex-col gap-y-[120px] mb-[120px]'
        >
          {data['about-cards'].map((entry) => (
            <AboutCard
              key={entry.id}
              title={entry.title}
              description={entry.description}
              image={entry.image}
              alt={entry.alt}
            />
          ))}
        </section>
        <section id='values' className='flex flex-col gap-y-16 mb-[145px]'>
          <SubHeading styling='mb-16'>Our values</SubHeading>
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
        </section>
        <section id='faqs'>
          <SubHeading styling='mb-12'>FAQs</SubHeading>
          {data.faqs.map((entry) => (
            <div key={entry.id} className='faq-wrapper mb-12'>
              <h3 className='font-space text-[24px] text-dark-navy text-center leading-7 tracking-[-1.07px] mb-8'>
                {entry.heading}
              </h3>
              <div
                key={entry.id}
                className='faqs-wrapper flex flex-col gap-y-4'
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
