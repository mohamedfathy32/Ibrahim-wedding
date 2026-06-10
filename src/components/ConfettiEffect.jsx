/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from '../hooks/useWindowSize'

const CONFETTI_KEY = 'wedding_confetti_shown'

export default function ConfettiEffect() {
  const [show, setShow] = useState(false)
  const { width, height } = useWindowSize()

  useEffect(() => {
    const hasShown = localStorage.getItem(CONFETTI_KEY)
    if (!hasShown) {
      setShow(true)
      localStorage.setItem(CONFETTI_KEY, 'true')
      const timer = setTimeout(() => setShow(false), 6000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!show) return null

  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={400}
      colors={['#D4AF37', '#E8B4B8', '#F5E6D3', '#FFFFFF', '#C9A96E']}
    />
  )
}
