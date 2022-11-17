import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileSideNav from './MobileSideNav'
import logo from '../public/assets/logo.svg'
import close from '../public/assets/icons/close.svg'
import hamburger from '../public/assets/icons/hamburger.svg'

export default function MobileNav() {
  const [active, setActive] = useState<boolean>(false)

  const toggleOverlay = () => {
    const html = document.querySelector('html')
    if (!active) {
      html?.classList.add('freeze')
    } else {
      html?.classList.remove('freeze')
    }
    setActive(!active)
  }

  return (
    <nav className='mobile-nav'>
      <div
        className={`overlay fixed h-full w-full bg-overlay-black ${
          active ? 'opacity-75 z-50' : 'opacity-0 -z-10'
        } transition-opacity duration-1000`}
        onClick={toggleOverlay}
      />
      <MobileSideNav show={active} />
      <div className='mobile-nav-wrapper bg-white flex px-8 h-16 items-center relative z-[100]'>
        <button className='absolute' type='button' onClick={toggleOverlay}>
          <Image src={active ? close : hamburger} alt='hamburger icon' />
        </button>
        <Link href='/' className='block mx-auto'>
          <Image src={logo} alt='scoot logo' />
        </Link>
      </div>
    </nav>
  )
}
