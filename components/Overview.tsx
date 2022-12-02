import Image from 'next/image'
import { OverviewProps } from '../interfaces/Interfaces'

export default function Overview({
  title,
  description,
  icon,
  alt,
}: OverviewProps) {
  return (
    <div className='overview-wrapper w-full px-8 tablet:flex tablet:gap-x-[79px] tablet:items-center tablet:max-w-[573px] tablet:mx-auto tablet:px-0 desktop:flex-col desktop:items-start'>
      <Image
        className='mx-auto mb-6 tablet:mx-0'
        src={icon}
        alt={alt}
        height={56}
        width={56}
      />
      <div className='text-wrapper tablet:max-w-[398px]'>
        <h2 className='overview-title font-space text-center tablet:text-left text-dark-navy text-[20px] leading-[28px] tracking-[-0.89px] mb-6'>
          {title}
        </h2>
        <p className='overview-description font-lexend text-dim-grey text-[15px] leading-[25px] text-center tablet:text-left desktop:max-w-[350px]'>
          {description}
        </p>
      </div>
    </div>
  )
}
