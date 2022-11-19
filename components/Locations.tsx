import Image from 'next/image'
import data from '../public/data.json'
import Banner from './Banner'
import Button from './Button'
import Paragraph from './Typography/Paragraph'
import SubHeading from './Typography/SubHeading'

function LocationButton({ text }: { text: string }) {
  return (
    <div className='location-wrapper font-space text-[24px] leading-7 tracking-[-1.07px] text-center text-dark-navy bg-light-yellow py-[22px]'>
      {text}
    </div>
  )
}

export default function Locations() {
  return (
    <>
      <Banner text='Locations' bgImage='bg-careers-location-mobile' />
      <div className='container px-8'>
        <section id='map'>
          <div className='img-wrapper bg-world-mobile bg-contain w-full pb-[49%] mb-10' />
        </section>
        <section id='locations' className='flex flex-col gap-y-4 mb-[72px]'>
          {data.locations.map((location) => (
            <LocationButton key={location.id} text={location.city} />
          ))}
        </section>
        <section id='message' className='location-listing mb-[72px]'>
          <SubHeading>{'Your City Not Listed?'}</SubHeading>
          <Paragraph>
            {
              'If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.'
            }
          </Paragraph>
          <Button text='Message Us' styling='mt-8 mx-auto' />
        </section>
      </div>
    </>
  )
}
