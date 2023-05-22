import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import PageProperties from '../modules/page-properties';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notion Embed Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title + " has-blue-color has-blue-background-color"}>
          Welcome to <a href="https://nextjs.org">notion embed tools!</a>
        </h1>
      </main>
    </div>
  )
}
