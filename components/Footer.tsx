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
      <section className='purchase-wrapper bg-dark-navy py-[88px] px-10'>
        <div className='mx-auto desktop:flex desktop:justify-between max-w-[1110px]'>
          <h2 className='font-space text-[32px] text-white leading-[32px] tracking-[-1.43px] text-center mb-10 max-w-[457px] mx-auto tablet:text-[48px] tablet:leading-[48px] tablet:tracking-[-2.14px] desktop:text-left desktop:mx-0'>
            Sign up and Scoot off today
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
      </section>

      <nav className='footer-nav pt-16 pb-[88px] bg-menu-bg px-10'>
        <div className='max-w-[1110px] text-center mx-auto tablet:flex tablet:justify-between tablet:items-center'>
          <ul className='local-nav flex flex-col items-center gap-y-4 mb-[85px] tablet:flex-row tablet:items-center tablet:gap-x-8 tablet:mb-0'>
            <li className='mb-[25px] tablet:mr-[26.58px] tablet:mb-0'>
              <Link href='/'>
                <Logo color='#FFF' />
              </Link>
            </li>
            <li className='font-space text-dim-grey text-[15px] leading-[25px]'>
              <Link href='/about'>About</Link>
            </li>
            <li className='font-space text-dim-grey text-[15px] leading-[25px]'>
              <Link href='/locations'>Location</Link>
            </li>
            <li className='font-space text-dim-grey text-[15px] leading-[25px]'>
              <Link href='/careers'>Careers</Link>
            </li>
          </ul>
          <ul className='external-nav flex justify-center gap-x-6 items-center'>
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
        </div>
      </nav>
    </footer>
  )
}
