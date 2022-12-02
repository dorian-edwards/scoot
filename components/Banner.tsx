import Image from 'next/image'
import { BannerProps } from '../interfaces/Interfaces'
import { useMediaContext } from '../providers/MediaProvider'
import whiteCircles from '../public/assets/patterns/white-circles.svg'

export default function Banner({
  text,
  mobileImage,
  tabletImage,
  desktopImage,
  styling,
}: BannerProps) {
  const { format } = useMediaContext()
  return (
    <header
      className={`${mobileImage} tablet:${tabletImage} desktop:${desktopImage} bg-no-repeat bg-cover mb-[72px] px-10 relative flex justify-start`}
    >
      {format !== 'mobile' && (
        <Image
          src={whiteCircles}
          alt='white-circles'
          width={243}
          height={63}
          className='absolute right-[-30px] self-center'
        />
      )}

      <h1 className='font-space text-[40px] text-center tablet:text-left max-w-[1100px] mx-auto tablet:mx-0 text-white leading-10 tracking-[-1.79px] py-[60px] tablet:py-[72px] '>
        {text}
      </h1>
    </header>
  )
}
