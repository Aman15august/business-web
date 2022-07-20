import Head from 'next/head'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Script from "next/script"
import Services from '../components/Services'
import Newsletter from '../components/Newsletter'
import About from '../components/About'
import Project from '../components/Project'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
        <Script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></Script>
      </Head>

      <Navbar />
      <Header />
      <About />
      <Newsletter />
      <Services />
      <Project />
      <Team/>
      <Footer/>
      {/* <Testimonials/> */}


    </div>
  )
}
