import Image from 'next/image'

import { useMediaContext } from '../providers/MediaProvider'

import Banner from './Banner'
import Button from './Button'
import LocationButton from './LocationButton'
import Paragraph from './Typography/Paragraph'
import SubHeading from './Typography/SubHeading'

import data from '../public/data.json'

import mobileMap from '../public/assets/images/world-map-mobile.png'
import worldMap from '../public/assets/images/worldmap.png'

export function LocationListing({ mobile }: { mobile: boolean }) {
  return (
    <section id='locations' className='flex flex-col gap-y-4 mb-[72px]'>
      {data.locations.map((location) => (
        <LocationButton
          key={location.id}
          text={location.city}
          styling={mobile ? '' : 'absolute'}
          position={location.position}
        />
      ))}
    </section>
  )
}

export default function Locations() {
  const { format } = useMediaContext()

  return (
    <>
      <Banner text='Locations' bgImage='careers-location' />

      <section id='map' className='mb-[72px]'>
        <div className='map-wrapper mx-auto relative max-w-[1110px]'>
          <Image
            src={format === 'mobile' ? mobileMap : worldMap}
            width={2214}
            height={221}
            alt='world map'
            className='mx-auto'
          />
        </div>
      </section>

      <div className='cust-container px-8 mx-auto'>
        {format === 'mobile' && <LocationListing mobile={true} />}
        <section
          id='message'
          className='location-listing mb-[72px] tablet:max-w-[700px] tablet:mx-auto desktop:flex desktop:max-w-[1110px]'
        >
          <SubHeading styling='desktop:max-w-[351px] desktop:text-left desktop:text-[48px] leading-[48px] tracking-[-2.14px]'>
            Your City Not Listed?
          </SubHeading>
          <Paragraph styling='desktop:max-w-[445px] desktop:text-left'>
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
