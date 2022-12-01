import LocationButton from './LocationButton'
import data from '../public/data.json'

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
