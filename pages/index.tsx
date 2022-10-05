import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Workexperience from '../components/Workexperience'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Asiimwe.J.Arnold</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* {header section} */}
      <Header/>
      {/* {hero section} */}
      <section id="hero" className='snap-start'>
        <Hero/>
      </section>
        {/* {About section} */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      {/* {Experience section} */}
      <section id="experience" className='snap-start'>
        <Workexperience />
      </section>
      {/* {Skills section} */}
      <section id="skills" className='snap-center' >
        <Skills/>
      </section>
      {/* {Projects section} */}
      <section id="projects" className='snap-center' >
        <Projects/>
      </section>
      {/* {Contact section} */}
      <section id="contacts" className='snap-start'>
        <Contact />
      </section>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
