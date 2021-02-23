import styles from '../styles/components/Profile.module.css'

export function Profile () {
  return (
    <div className={styles.profileContainer} >
      <img src="https://github.com/matheusbr1.png" alt="Matheus Baron"/>
      <div>
        <strong>Matheus Baron</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level  1
        </p>
      </div>
    </div>
  )
}