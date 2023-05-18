import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import PageProperties from '../modules/page-properties';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">notion embed tools!</a>
        </h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
