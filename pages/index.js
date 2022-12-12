import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <div className={styles.main}>
        <h1 className={styles.homeTitle}>Welcome Home</h1>
        <Link href="about">
          <h3>About</h3>
        </Link>
        <Link href="about">
          <h3>Profile</h3>
        </Link>
      </div>
    </div>
  )
}
