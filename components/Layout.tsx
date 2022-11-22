import { useState, useEffect } from 'react'
import Footer from './Footer'
import MobileNav from './MobileNav'
import Nav from './Nav'

import { useMediaContext } from '../providers/MediaProvider'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { format } = useMediaContext()

  return (
    <>
      {!format ? (
        <>Loading</>
      ) : (
        <>
          {format === 'mobile' ? <MobileNav /> : <Nav />}
          <>{children}</>
          <Footer />
        </>
      )}
    </>
  )
}
