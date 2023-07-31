import ContactMe from './_home/contact-me'
import Projects from './_home/projects'

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between bg-slate-700 not-mobile:px-11 px-5">
      <Projects />
      <ContactMe />
    </main>
  )
}

export default Home
