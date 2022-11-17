import Image from 'next/image'
import SubHeading from './Typography/Subheading'
import Paragraph from './Typography/Paragraph'

import { AboutCardProps } from '../interfaces/Interfaces'

export default function AboutCard({
  title,
  description,
  image,
  alt,
}: AboutCardProps) {
  return (
    <div className='about-card'>
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
