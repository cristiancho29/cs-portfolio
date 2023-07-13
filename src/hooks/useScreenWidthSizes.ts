'use client'

import { useCallback, useEffect, useState } from 'react'

export const useScreenWidthSizes = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  const getScreenWidth = useCallback(() => {
    const currentScreenWidth = window.innerWidth
    const condition = currentScreenWidth < 500
    condition !== isMobile && setIsMobile(!!condition)
  }, [isMobile])

  useEffect(() => {
    if (isMobile === null) {
      getScreenWidth()
    }
    if (window) {
      window.addEventListener('resize', getScreenWidth)
      return () => {
        window.removeEventListener('resize', getScreenWidth)
      }
    }
  }, [getScreenWidth, isMobile])

  return {
    isMobile,
  }
}
