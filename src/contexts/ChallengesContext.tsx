import { createContext, useState } from 'react'
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
}

export function ChallengesProvider({ children } : ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienteToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)  
    const challenge = challenges[randomChallengeIndex]
    
    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
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
      experienteToNextLevel
    }} >
      {children}
    </ChallengesContext.Provider>
  )
}