import Image from 'next/image'
import { FeatureProps } from '../interfaces/Interfaces'
import Button from './Button'
import Paragraph from './Typography/Paragraph'
import SubHeading from './Typography/SubHeading'

export default function Feature({
  title,
  description,
  image,
  alt,
  pattern,
}: FeatureProps) {
  return (
    <div className='feature-wrapper'>
      <div className='image-wrapper w-[85%] max-w-[445px] rounded-full overflow-hidden mb-14 mx-auto'>
        <Image src={image} alt={alt} width={445} height={445} />
      </div>
      <div className='text-wrapper w-[85%] w-max-[445px] mx-auto'>
        <SubHeading>{title}</SubHeading>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  )
}
