import type { AppProps } from 'next/app'
import MediaProvider from '../providers/MediaProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MediaProvider>
      <Component {...pageProps} />
    </MediaProvider>
  )
}
