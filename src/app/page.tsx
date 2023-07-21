import Projects from './_home/projects'

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between bg-slate-700 not-mobile:px-11 px-5">
      <Projects />
      <section id="contact-me">Contact me</section>
    </main>
  )
}

export default Home
