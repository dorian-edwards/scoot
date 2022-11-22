import React, { useContext, createContext, useState, useEffect } from 'react'

export interface MediaContextInterface {
  format: string
}

const MediaContext = createContext<MediaContextInterface | null>(null)

export const useMediaContext = (): MediaContextInterface => {
  const context = useContext(MediaContext)
  if (!context) throw new Error('Context required')
  return context
}

export default function MediaProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [format, setFormat] = useState<string>('')

  const determineViewport = (): void => {
    const viewport = window.innerWidth

    if (viewport < 768) {
      setFormat('mobile')
    } else if (viewport >= 768 && viewport < 1440) {
      setFormat('tablet')
    } else {
      setFormat('desktop')
    }
  }

  useEffect(() => {
    window.addEventListener('resize', determineViewport)
    determineViewport()
  }, [])

  const value = { format }

  return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
}
