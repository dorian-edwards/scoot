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
  styling,
  addOns,
}: FeatureProps) {
  return (
    <div className={`feature-wrapper ${styling} desktop:justify-between`}>
      <div className='image-wrapper w-[85%] max-w-[445px] rounded-full overflow-hidden mb-14 mx-auto desktop:mx-0'>
        <Image src={image} alt={alt} width={445} height={445} />
      </div>
      <div className='text-wrapper w-[85%] w-max-[445px] mx-auto desktop:max-w-[445px] desktop:flex desktop:flex-col desktop:justify-center desktop:mx-0'>
        <SubHeading styling='desktop:text-left'>{title}</SubHeading>
        <Paragraph styling='desktop:text-left'>{description}</Paragraph>
        {addOns}
      </div>
    </div>
  )
}
