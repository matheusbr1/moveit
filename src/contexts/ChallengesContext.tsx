import { createContext, useEffect, useState } from 'react'
import challenges from '../../challenges.json'

export const ChallengesContext = createContext({} as ChallengesContextData)

interface ChallengesProviderProps {
  children: React.ReactNode
}

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  levelUp(): void
  startNewChallenge(): void
  activeChallenge: Challenge
  resetChallenge(): void
  experienteToNextLevel: number
  completeChallenge(): void
}

export function ChallengesProvider({ children } : ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienteToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  },[])

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)  
    const challenge = challenges[randomChallengeIndex]
    
    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if(Notification.permission == 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} xp`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExpericence = currentExperience + amount

    if (finalExpericence >= experienteToNextLevel) {
      finalExpericence = finalExpericence -  experienteToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExpericence)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      currentExperience,
      challengesCompleted,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienteToNextLevel,
      completeChallenge
    }} >
      {children}
    </ChallengesContext.Provider>
  )
}