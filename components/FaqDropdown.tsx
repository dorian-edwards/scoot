import { useState } from 'react'
import Chevron from './Chevron'

export interface FaqDropdownProps {
  entry: {
    id: string
    question: string
    answer: string
  }
}

export default function FaqDropdown({ entry }: FaqDropdownProps) {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div
      className={`faq-wrapper pt-8 pl-8 pr-7 bg-snow w-[85%] w-max-[730px] mx-auto ${
        active ? 'max-h-[500px]' : 'max-h-[104px]'
      } transition-all`}
    >
      <div className='faq-question flex justify-between items-center mb-6'>
        <h3 className='font-space text-[18px] text-dark-navy leading-6 tracking-[-0.8px] w-[85%]'>
          {entry.question}
        </h3>
        <button
          type='button'
          className={`chevron-wrapper ${active && 'rotate-180'}`}
          onClick={() => setActive(!active)}
        >
          <Chevron />
        </button>
      </div>
      {active && (
        <p className='font-lexend text-[15px] leading-[25px] text-dark-navy pb-8'>
          {entry.answer}
        </p>
      )}
    </div>
  )
}
