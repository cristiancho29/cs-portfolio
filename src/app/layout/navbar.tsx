import FacebookIcon from './../../assets/svg/facebook.svg'
import InstagramIcon from './../../assets/svg/instagram.svg'
import LinkedinIcon from './../../assets/svg/linkedin.svg'
import GithubIcon from './../../assets/svg/github.svg'

const NavBar = () => {
  return (
    <nav className="flex bg-black justify-between px-12 py-5 sticky top-0">
      <ul className="flex">
        <a href="https://www.facebook.com/cdsuarez29/" target="_blank" rel="noreferrer">
          <FacebookIcon className="text-white mr-5 hover:text-slate-400 transition delay-75 duration-200" />
        </a>
        <a href="https://www.instagram.com/cristiancho29/" target="_blank" rel="noreferrer">
          <InstagramIcon className="text-white mr-5 hover:text-slate-400 transition delay-100 duration-200" />
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-david-suárez-reina-424066168/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon className="text-white mr-5 hover:text-slate-400 transition delay-100 duration-200" />
        </a>
        <a href="https://github.com/cristiancho29" target="_blank" rel="noreferrer">
          <GithubIcon className="text-white mr-5 hover:text-slate-400 transition delay-100 duration-200" />
        </a>
      </ul>
      <ul className="flex text-white">
        <li className="font-semibold ml-5">
          <a href="#projects" className="hover:text-slate-400 transition delay-75 duration-200">
            Projects
          </a>
        </li>
        <li className="font-semibold ml-5">
          <a href="#contact-me" className="hover:text-slate-400 transition delay-75 duration-200">
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
