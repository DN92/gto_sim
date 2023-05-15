import Image from 'next/image'
import styles from './page.module.css'
import RngTV from './(components)/rngTV/RngTV'

export default function Home() {
  return (
    <main className={styles.main}>
      Some PlaceHolder
      <RngTV />
    </main>
  )
}
