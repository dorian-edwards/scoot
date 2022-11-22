import Link from 'next/link'
import Button from './Button'
import { MobileSideNavProps } from '../interfaces/Interfaces'

export default function MobileSideNav({ show }: MobileSideNavProps) {
  const unfreezeHtml = (): void => {
    const html = document.querySelector('html')
    if (html) html.classList.remove('freeze')
  }

  return (
    <div
      className={`mobile-side-nav flex flex-col justify-between absolute z-50 text-light-grey font-space pl-8 pt-32 pb-6 h-full w-[256px] bg-menu-bg translate-x-[-100%] ${
        show ? 'translate-x-[0]' : ''
      } transition-transform duration-1000`}
    >
      <ul className='flex flex-col gap-y-6'>
        <li>
          <Link href='/about' onClick={unfreezeHtml}>
            About
          </Link>
        </li>
        <li>
          <Link href='/locations' onClick={unfreezeHtml}>
            Locations
          </Link>
        </li>
        <li>
          <Link href='/careers' onClick={unfreezeHtml}>
            Careers
          </Link>
        </li>
      </ul>
      <Button text='Get Scootin' />
    </div>
  )
}
