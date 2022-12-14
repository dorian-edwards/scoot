import Head from 'next/head'
import Layout from '../../components/Layout'

import About from '../../components/About'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  )
}
