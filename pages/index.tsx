import Head from 'next/head'
import Layout from '../components/Layout'

import HomePage from '../components/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  )
}
