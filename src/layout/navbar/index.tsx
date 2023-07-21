'use client'

import NavBarWeb from './web'
import { useCallback, useEffect, useRef, useState } from 'react'
import NavBarMobile from './mobile'
import { useWindowSize } from '@/hooks/useWindowSize'
import NavBarLoading from './navbar-loading'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const lastScroll = useRef(0)
  const notMobile = useWindowSize(500)

  const controlNavBar = useCallback(() => {
    const currentScroll = window.scrollY
    if (currentScroll > lastScroll.current) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    lastScroll.current = currentScroll
  }, [])

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', controlNavBar)
      return () => {
        window.removeEventListener('scroll', controlNavBar)
      }
    }
  }, [controlNavBar])

  if (notMobile === null) return <NavBarLoading />

  return !notMobile ? <NavBarMobile hidden={hidden} /> : <NavBarWeb hidden={hidden} />
}

export default Navbar
