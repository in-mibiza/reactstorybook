import Head from 'next/head'
import Image from 'next/image'
import Sliderhome from '../src/components/Sliderhome/Sliderhome'
import styles from '../styles/Home.module.css'
import Newarrivals from '../src/components/Newarrivals/Newarrivals';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SKLUM</title>
        <meta name="description" content="Muebles baratos online | Muebles modernos - SKLUM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div id='columns' className='container-fluid u-max-width'>
          <section className='c-section'>
            <div className='c-home-comp'>
              <Sliderhome></Sliderhome>
              <Newarrivals></Newarrivals>
            </div>
          </section>
        </div>
         

      </main>

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
