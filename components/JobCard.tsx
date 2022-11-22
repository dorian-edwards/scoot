import Button from './Button'
import { JobCardProps } from '../interfaces/Interfaces'

export default function JobCard({ position, location }: JobCardProps) {
  return (
    <div className='job-card-wrapper bg-snow px-8 pb-8 pt-9 tablet:flex tablet:justify-between tablet:px-12 tablet:items-center'>
      <div>
        <h3 className='position font-space text-[18px] leading-[24px] tracking-[-0.8px] text-center text-dark-navy tablet:mb-2 tablet:text-left'>
          {position}
        </h3>
        <span className='location font-lexend text-[15px] leading-[25px] block text-center text-dark-navy mb-4 tablet:text-left tablet:mb-0'>
          {location}
        </span>
      </div>
      <Button text='Apply' styling='mx-auto tablet:mx-0' />
    </div>
  )
}
