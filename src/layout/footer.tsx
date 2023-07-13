import FacebookIcon from '@/assets/svg/facebook.svg'
import InstagramIcon from '@/assets/svg/instagram.svg'
import LinkedinIcon from '@/assets/svg/linkedin.svg'
import GithubIcon from '@/assets/svg/github.svg'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-black text-white font-medium px-5 py-8 not-mobile:px-12">
      <p>Cristian Suárez &copy; - 2023</p>
      <ul className="flex mt-8 justify-around w-full max-w-[300px]">
        <a href="https://www.facebook.com/cdsuarez29/" target="_blank" rel="noreferrer">
          <FacebookIcon className="text-white hover:text-slate-400 transition delay-75 duration-200" />
        </a>
        <a href="https://www.instagram.com/cristiancho29/" target="_blank" rel="noreferrer">
          <InstagramIcon className="text-white hover:text-slate-400 transition delay-100 duration-200" />
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-david-suárez-reina-424066168/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon className="text-white hover:text-slate-400 transition delay-100 duration-200" />
        </a>
        <a href="https://github.com/cristiancho29" target="_blank" rel="noreferrer">
          <GithubIcon className="text-white hover:text-slate-400 transition delay-100 duration-200" />
        </a>
      </ul>
    </footer>
  )
}

export default Footer
