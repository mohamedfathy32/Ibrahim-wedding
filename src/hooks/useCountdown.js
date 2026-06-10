import { useEffect, useState } from 'react'

function getTimeLeft(targetDate) {
  const target = new Date(targetDate).getTime()

  if (Number.isNaN(target)) {
    return { completed: true, days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const diff = target - Date.now()

  if (diff <= 0) {
    return { completed: true, days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    completed: false,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate))
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}
