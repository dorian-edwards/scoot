import Image from 'next/image'
import Button from './Button'

export interface FeatureProps {
  title: string
  description: string
  image: string
  alt: string
  pattern?: string
}

export default function Feature({
  title,
  description,
  image,
  alt,
  pattern,
}: FeatureProps) {
  return (
    <div className='feature-wrapper'>
      <div className='image-wrapper w-[90%] max-w-[445px] rounded-full overflow-hidden mb-14 mx-auto'>
        <Image src={image} alt={alt} width={445} height={445} />
      </div>
      <div className='text-wrapper px-8'>
        <h2 className='font-space text-dark-navy text-center text-[32px] leading-[32px] tracking-[-1.43px]  mb-8'>
          {title}
        </h2>
        <p className='font-lexend text-dim-grey text-center text-[15px] leading-[25px] mb-8'>
          {description}
        </p>
      </div>
      <div className='button-wrapper flex justify-center'>
        <Button text='Learn More' />
      </div>
    </div>
  )
}
