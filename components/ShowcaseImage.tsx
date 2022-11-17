import Image from 'next/image'

export interface ShowCaseImageProps {
  image: string
  alt: string
  number: string
}

export default function ShowcaseImage({
  image,
  alt,
  number,
}: ShowCaseImageProps) {
  return (
    <div>
      <div className='image-wrapper w-60 h-60 rounded-full mx-auto mb-16 relative'>
        <Image
          className='rounded-full'
          src={image}
          alt={alt}
          width={240}
          height={240}
        />
        <span className='number-sticker font-space flex text-[24px] leading-7 tracking-[-1.07px] h-24 w-24 rounded-full bg-yellow justify-center items-center mx-auto absolute bottom-[-15%] left-[30%]'>
          {number}
        </span>
      </div>
    </div>
  )
}
