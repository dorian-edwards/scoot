// import { HeadingProps } from '../../Interfaces/Interfaces'

// export interface Headings {
//   [index: number]: JSX.Element
// }

// export default function Heading({ children, type }: HeadingProps) {
//   const styles = [
//     'font-space text-[56px] lead-[56px] tracking-[-2.5px]',
//     'font-space text-[48px] lead-[48px] tracking-[-2.14px]',
//     'font-space text-[40px] lead-[48px] tracking-[-1.79px]',
//     'font-space text-[24px] lead-[28px] tracking-[-1.07px]',
//   ]

//   const headings: Headings = {
//     0: <h1 className={`${styles[0]} text-dark-navy`}>{children}</h1>,
//     1: <h2 className={`${styles[1]} text-dark-navy`}>{children}</h2>,
//     2: <h3 className={`${styles[2]} text-dark-navy`}>{children}</h3>,
//     3: <h4 className={`${styles[3]} text-dark-navy`}>{children}</h4>,
//   }

//   return <>{headings[type]}</>
// }

export default function HeadingPrimary({ children }: { children: string }) {
  return (
    <h1 className='font-space text-center text-white text-[40px] lead-[48px] tracking-[-1.79px] tablet:text-[56px] tablet:lead-[56px] tablet:tracking-[-2.5px]'>
      {children}
    </h1>
  )
}
