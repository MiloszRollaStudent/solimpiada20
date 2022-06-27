import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='bgGradient'>
    <div className={styles.container}>
      <Head>
        <title>Solimpiada 2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/beer.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Solimpiada 2022
        </h1>
        <p className={styles.description}>
         Przygotuj się na olimpiade o jakiej nawet nie śniłeś
          </p>
       <a href='https://forms.gle/fEqijVFWQLqLoj11A'><button className="btn fifth" >Kliknij mnie aby przejść do ankiety!</button> </a>
          
        <p className="subHeader">
          Solenizanci
          </p>
            <p className="subHeader">
          &darr;
        </p>

        <div className={styles.grid}>
            <Link href="/solga" >
              <div className={styles.card}>
            <h2>Patryk Solga &rarr;</h2>
            <p>Przyszły psycholog, wspaniały człowiek - lubi piwo</p>
              </div>
          </Link>
          <Link href="/wojtek">
            <div className={styles.card}>
          <h2>Wojtek Maciejewski&rarr;</h2>
          <p>Brat Pawła i Hanny, lubi żartować, jego fotel ma dziwny zapach </p>
            </div>
              </Link>
              
        </div>
      </main>
        <footer className={styles.footer}>
          <div style={{textAlign: 'center'}}>
        <p>Solimpiada 2022</p>
            <p>Jak przez to ze zrobiłem tą strone ujebie jutro egzamin z analizy to dajcie na poprawke :(</p>
            <p style={{ fontWeight: '700',fontStyle:'italic', fontSize:'1em'}}>51 1140 2004 0000 3402 7546 2080</p>
          </div>
      </footer>
    </div>
          </div>
  )
}
