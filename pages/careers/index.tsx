import Head from 'next/head'
import Careers from '../../components/Careers'
import Layout from '../../components/Layout'

export default function CareerPage() {
  return (
    <>
      <Head>
        <title>Careers</title>
      </Head>
      <Layout>
        <Careers />
      </Layout>
    </>
  )
}
