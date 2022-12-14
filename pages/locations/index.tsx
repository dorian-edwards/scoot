import Head from 'next/head'
import Layout from '../../components/Layout'

import Locations from '../../components/Locations'

export default function LocationPage() {
  return (
    <>
      <Head>
        <title>Locations</title>
      </Head>
      <Layout>
        <Locations />
      </Layout>
    </>
  )
}
