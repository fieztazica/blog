import { greetings } from '@/data/langs/greetings'
import { useEffect, useState } from 'react'

export function useGreeting() {
  const [greeting, setGreeting] = useState(greetings[0])
  const [isShowing, setIsShowing] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShowing(false)
      setTimeout(() => {
        setIsShowing(true)
        setGreeting(greetings[(greetings.indexOf(greeting) + 1) % greetings.length])
      }, 500)
    }, 5000)
    return () => clearInterval(interval)
  }, [greeting])

  return { greeting, isShowing }
}
