export interface HeadingPrimaryProps {
  children: string
  styling?: string
}

export default function HeadingPrimary({
  children,
  styling,
}: HeadingPrimaryProps) {
  return (
    <h1
      className={`font-space text-center text-white text-[40px] lead-[48px] tracking-[-1.79px] tablet:text-[56px] tablet:lead-[56px] tablet:tracking-[-2.5px] desktop:text-left desktop:max-w-[500px] ${styling}`}
    >
      {children}
    </h1>
  )
}
