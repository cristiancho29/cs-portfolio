'use client'
import { useCallback, useEffect, useState } from 'react'

export const useWindowSize = (width: number) => {
  const [targetReached, setTargetReached] = useState<boolean | null>(null)
  const updateTarget = useCallback(() => {
    setTargetReached(window.innerWidth > width)
  }, [width])

  useEffect(() => {
    if (targetReached === null) updateTarget()
    window.addEventListener('resize', updateTarget)
    return () => {
      window.removeEventListener('resize', updateTarget)
    }
  }, [updateTarget, targetReached])
  return targetReached
}
