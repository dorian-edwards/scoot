import Button from './Button'
import Feature from './Feature'
import JobCard from './JobCard'
import ValueCard from './ValueCard'
import SubHeading from './Typography/SubHeading'

import data from '../public/data.json'

export default function Careers() {
  return (
    <>
      <header
        className={`bg-careers-location-mobile tablet:bg-careers-location-tablet desktop:bg-careers-location-desktop mb-[72px] px-10`}
      >
        <h1 className='font-space text-[40px] text-center tablet:text-left max-w-[1100px] mx-auto text-white leading-10 tracking-[-1.79px] py-[60px] tablet:py-[72px] '>
          Careers
        </h1>
      </header>
      <main>
        <section id='careers' className='mb-[120px]'>
          <Feature
            image={data.careers.image}
            alt={data.careers.alt}
            title={data.careers.title}
            description={data.careers.description}
          />
          <Button text='Say hello' styling='mx-auto mt-8' />
        </section>
        <section id='why-join' className='flex flex-col gap-y-16 mb-[145px]'>
          <SubHeading>Why join us?</SubHeading>
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
        <section id='staff' className='flex flex-col gap-y-4 px-8 mb-[120px]'>
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
