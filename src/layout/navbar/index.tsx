'use client'

import NavBarWeb from './web'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import NavBarMobile from './mobile'
import { responsiveContext } from '@/context/responsive'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const lastScroll = useRef(0)
  const { isMobile } = useContext(responsiveContext)

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

  return isMobile ? <NavBarMobile hidden={hidden} /> : <NavBarWeb hidden={hidden} />
}

export default Navbar
