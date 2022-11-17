import { useState, useEffect } from 'react'
import Chevron from './Chevron'

const data = {
  question: 'How do I download the app?',
  answer:
    'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.',
}

export default function FaqDropdown() {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div
      className={`faq-wrapper p-8 bg-snow w-[85%] w-max-[730px] mx-auto ${
        !active ? 'h-[112px]' : 'h-[306px]'
      } transition-all`}
    >
      <div className='faq-question flex justify-between items-center mb-6'>
        <h3 className='font-space text-[18px] text-dark-navy leading-6 tracking-[-0.8px]'>
          {data.question}
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
        <p className='font-lexend text-[15px] leading-[25px] text-dark-navy'>
          {data.answer}
        </p>
      )}
    </div>
  )
}
