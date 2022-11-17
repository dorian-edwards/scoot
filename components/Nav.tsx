import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/assets/logo.svg'
import Button from './Button'

export default function Nav() {
  return (
    <nav className='flex px-10 h-24 items-center justify-center bg-white z-50 sticky top-0'>
      <div className='container max-w-[1100px] flex justify-between'>
        <ul className='desktop-nav flex items-center'>
          <li className='nav-link mr-[58.18px] flex-shrink-0'>
            <Link href='/'>
              <Image src={logo} alt='scoot logo' />
            </Link>
          </li>
          <li className='nav-link mr-8'>
            <Link className='font-space text-dim-grey' href='/about'>
              About
            </Link>
          </li>
          <li className='nav-link mr-8'>
            <Link className='font-space text-dim-grey' href='/location'>
              Location
            </Link>
          </li>
          <li className='nav-link mr-8'>
            <Link className='font-space text-dim-grey' href='/careers'>
              Careers
            </Link>
          </li>
        </ul>
        <Button text='Get Scootin' />
      </div>
    </nav>
  )
}
