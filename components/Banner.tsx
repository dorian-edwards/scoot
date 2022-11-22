import { BannerProps } from '../interfaces/Interfaces'

export default function Banner({ text, bgImage, styling }: BannerProps) {
  return (
    <header
      className={`${bgImage}-mobile tablet:${bgImage}-tablet desktop:${bgImage}-desktop bg-no-reapeat mb-[72px]`}
    >
      <h1 className='font-space text-[40px] text-center text-white leading-10 tracking-[-1.79px] px-8 py-[60px]'>
        {text}
      </h1>
    </header>
  )
}
