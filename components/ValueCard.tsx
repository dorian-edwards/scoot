import ShowcaseImage from './ShowcaseImage'
import TertiaryHeading from './Typography/TertiaryHeading'
import Paragraph from './Typography/Paragraph'

export interface ValueCardProps {
  id: string
  title: string
  description: string
  image: string
  alt: string
  number: string
}

export default function ValueCard({
  id,
  title,
  description,
  image,
  alt,
  number,
}: ValueCardProps) {
  return (
    <div className='value-card'>
      <ShowcaseImage image={image} alt={alt} number={number} />
      <div className='text-wrapper w-[85%] w-max-[445px] mx-auto'>
        <TertiaryHeading>{title}</TertiaryHeading>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  )
}
