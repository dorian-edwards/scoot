export interface SubHeadingProps {
  children: string
  styling?: string
}

export default function SubHeading({ children, styling }: SubHeadingProps) {
  return (
    <h2
      className={`font-space text-[32px] text-dark-navy leading-8 tracking-[-1.43px] text-center mb-8 ${styling}`}
    >
      {children}
    </h2>
  )
}
