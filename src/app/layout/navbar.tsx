import FacebookIcon from './../../assets/svg/facebook.svg'
import InstagramIcon from './../../assets/svg/instagram.svg'
import LinkedinIcon from './../../assets/svg/linkedin.svg'
import GithubIcon from './../../assets/svg/github.svg'

const NavBar = () => {
  return (
    <nav className="flex bg-black justify-between px-12 py-5">
      <ul className="flex">
        <FacebookIcon className="text-white mr-5 text-base" />
        <InstagramIcon className="text-white mr-5" />
        <LinkedinIcon className="text-white mr-5" />
        <GithubIcon className="text-white mr-5" />
      </ul>
      <ul className="flex text-white">
        <li>Projects</li>
        <li>Contact me</li>
      </ul>
    </nav>
  )
}

export default NavBar
