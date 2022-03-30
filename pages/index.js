import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nerptt</title>
         <link rel="icon" type="image/x-icon" href="IMG_2627.jpg">
      </Head>

      <main>
        <Header title="nerpt.nett" />
        <p className="description">
          _________________________
        </p>
      </main>

      <Footer />
    </div>
  )
}
