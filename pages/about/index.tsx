import Head from 'next/head'
import Layout from '../../components/Layout'

import About from '../../components/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  )
}
