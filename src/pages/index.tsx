import Head from 'next/head'

import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/CountDown'
import { ExpirienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExpirienceBar/>

      <section>
        <div  >
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          
        </div>
      </section>
    </div>
  )
}
