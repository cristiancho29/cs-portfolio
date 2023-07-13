'use client'

import Loading from '@/components/loading'
import { useScreenWidthSizes } from '@/hooks/useScreenWidthSizes'
import { ReactNode, createContext } from 'react'

type ResponsiveContextType = {
  isMobile: boolean | null
}

export const responsiveContext = createContext<ResponsiveContextType>({
  isMobile: false,
})

const ResponsiveProvider = ({ children }: { children: ReactNode }) => {
  const { isMobile } = useScreenWidthSizes()

  return isMobile !== null ? (
    <responsiveContext.Provider value={{ isMobile }}>{children}</responsiveContext.Provider>
  ) : (
    <div className="bg-slate-700 border h-screen flex justify-center items-center">
      <Loading />
    </div>
  )
}

export default ResponsiveProvider
