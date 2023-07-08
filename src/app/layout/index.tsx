import type { ReactNode } from 'react'
import { Footer } from './footer'
import { Header } from './header'
import { NavBar } from './navbar'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <NavBar />
      <Header />
      {children}
      <Footer />
    </div>
  )
}
