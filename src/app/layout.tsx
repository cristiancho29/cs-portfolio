import Footer from '@/layout/footer'
import Header from '@/layout/header'
import NavBar from '@/layout/navbar'
import '@/styles/globals.css'
import '@/styles/animations.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="relative">
        <div id="portal" className="fixed w-full z-[400]" />
        <NavBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
export default RootLayout
