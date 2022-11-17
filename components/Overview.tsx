import Image from 'next/image'
import { OverviewProps } from '../Interfaces/Interfaces'

export default function Overview({
  title,
  description,
  icon,
  alt,
}: OverviewProps) {
  return (
    <div className='overview-wrapper px-8'>
      <Image
        className='mx-auto mb-6'
        src={icon}
        alt={alt}
        height={56}
        width={56}
      />
      <h2
        id='locate'
        className='overview-title font-space text-center text-dark-navy text-[20px] leading-[28px] tracking-[-0.89px] mb-6'
      >
        {title}
      </h2>
      <p className='overview-description font-lexend text-dim-grey text-[15px] leading-[25px] text-center'>
        {description}
      </p>
    </div>
  )
}
