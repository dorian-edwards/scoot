export interface LocationButtonProps {
  text: string
  position?: string
  styling?: string
}

interface positionMapInterface {
  [location: string]: string
}

export default function LocationButton({
  text,
  styling,
  position,
}: LocationButtonProps) {
  const positionMap: positionMapInterface = {
    yokohama: 'right-[6%] bottom-[73%] bg-overlay-black',
    jakarta: 'right-[14%] bottom-[43%]',
    london: 'left-[35%] bottom-[84%]',
    'new york': 'left-[13%] bottom-[74%]',
  }
  return (
    <div
      className={`location-wrapper font-space text-[24px] leading-7 tracking-[-1.07px] text-center text-dark-navy bg-light-yellow py-[22px] tablet:bg-yellow tablet:h-10 tablet:w-[120px] tablet:flex justify-center items-center tablet:text-[13px] tablet:leading-7 tablet:tracking-[-0.58px] ${styling} ${
        positionMap[text.toLocaleLowerCase()]
      }`}
    >
      {text}
    </div>
  )
}
