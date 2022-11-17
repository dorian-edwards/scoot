export default function Paragraph({ children }: { children: string }) {
  return (
    <p className='font-lexend text-[15px] leading-[25px] text-center text-dim-grey'>
      {children}
    </p>
  )
}
