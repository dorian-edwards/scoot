export interface ParagraphProps {
  children: string
  styling?: string
}

export default function Paragraph({ children, styling }: ParagraphProps) {
  return (
    <p
      className={`font-lexend text-[15px] leading-[25px] text-center text-dim-grey ${styling}`}
    >
      {children}
    </p>
  )
}
