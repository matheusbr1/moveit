import { useContext } from 'react'
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile () {

  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer} >
      <img src="https://github.com/matheusbr1.png" alt="Matheus Baron"/>
      <div>
        <strong>Matheus Baron</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level  {level}
        </p>
      </div>
    </div>
  )
}