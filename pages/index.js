import Head from 'next/head'
import Contact from '../components/Contact'
import Intro from '../components/Intro'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Marketing Agency</title>
        <meta name="description" content="Digital Marketing Agency KGT" />
      </Head>
      <Intro/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}
