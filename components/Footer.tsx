import Image from 'next/image'
import Link from 'next/link'
import appleStore from '../public/assets/icons/app-store.svg'
import googlePlay from '../public/assets/icons/google-play.svg'
import facebook from '../public/assets/icons/facebook.svg'
import twitter from '../public/assets/icons/twitter.svg'
import instagram from '../public/assets/icons/instagram.svg'

import Logo from './Logo'

export default function Footer() {
  return (
    <footer className='relative'>
      <div className='container mx-auto'>
        <div className='purchase-wrapper bg-dark-navy py-[88px]'>
          <h2 className='font-space text-[32px] text-white leading-[32px] tracking-[-1.43px] text-center mb-10'>
            Sign up and scoot off today
          </h2>
          <div className='purchase flex gap-x-[13px] justify-center'>
            <button type='button' className='w-[113.57px]'>
              <Image src={appleStore} alt='apple store logo' />
            </button>
            <button type='button' className='w-[130px]'>
              <Image src={googlePlay} alt='google play logo' />
            </button>
          </div>
        </div>
        <nav className='footer-nav pt-16 pb-[88px] bg-menu-bg'>
          <ul className='local-nav flex flex-col items-center gap-y-4 mb-[85px]'>
            <li className='mb-[25px]'>
              <Link href='/'>
                <Logo color='#FFF' />
              </Link>
            </li>
            <li className='font-space text-dim-grey text-[15px] leading-[25px]'>
              <Link href='/about'>About</Link>
            </li>
            <li className='font-space text-dim-grey text-[15px] leading-[25px]'>
              <Link href='/location'>Location</Link>
            </li>
            <li className='font-space text-dim-grey text-[15px] leading-[25px]'>
              <Link href='/careers'>Careers</Link>
            </li>
          </ul>
          <ul className='external-nav flex justify-center gap-x-6'>
            <li>
              <Link href='#'>
                <Image src={facebook} alt='facebook logo' />
              </Link>
            </li>
            <li>
              <Link href='#'>
                <Image src={twitter} alt='twitter logo' />
              </Link>
            </li>
            <li>
              <Link href='#'>
                <Image src={instagram} alt='instagram logo' />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
