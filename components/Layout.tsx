import { useState, useEffect } from 'react'
import Footer from './Footer'
import MobileNav from './MobileNav'
import Nav from './Nav'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMobile, setIsMobile] = useState<boolean>(true)

  useEffect(() => {
    setIsMobile(window.innerWidth < 700)
    window.addEventListener('resize', () =>
      setIsMobile(window.innerWidth < 700)
    )
  }, [])

  return (
    <>
      {isMobile ? <MobileNav /> : <Nav />}
      <>{children}</>
      <Footer />
    </>
  )
}
