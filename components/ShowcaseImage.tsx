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
      <div className='image-wrapper w-60 h-60 rounded-full overflow-hidden mx-auto'>
        <Image src={image} alt={alt} width={240} height={240} />
      </div>
      <span className='font-space flex text-[24px] leading-7 tracking-[-1.07px] h-24 w-24 rounded-full bg-yellow justify-center items-center mx-auto relative bottom-[57.5px]'>
        {number}
      </span>
    </div>
  )
}
