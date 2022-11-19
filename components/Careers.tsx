import Banner from './Banner'
import Feature from './Feature'
import Button from './Button'
import SubHeading from './Typography/SubHeading'
import ValueCard from './ValueCard'

import data from '../public/data.json'
import JobCard from './JobCard'

export default function Careers() {
  return (
    <>
      <Banner text='Careers' bgImage='bg-careers-location-mobile' />
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
