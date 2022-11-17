export interface TertiaryHeadingProps {
  children: string
  styling?: string
}

export default function TertiaryHeading({
  children,
  styling,
}: TertiaryHeadingProps) {
  return (
    <h3 className='tert-heading font-space text-[24px] leading-7 tracking-[-1.07px] text-center text-dark-navy mb-[27px]'>
      {children}
    </h3>
  )
}
