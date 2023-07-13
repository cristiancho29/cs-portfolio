import { MouseEventHandler } from 'react'
import { Transition } from '@headlessui/react'
import FacebookIcon from '@/assets/svg/facebook.svg'
import InstagramIcon from '@/assets/svg/instagram.svg'
import LinkedinIcon from '@/assets/svg/linkedin.svg'
import GithubIcon from '@/assets/svg/github.svg'

const Drawer = ({ open = false, onClose }: { open: boolean; onClose: MouseEventHandler }) => {
  return (
    <Transition
      className="flex"
      show={open}
      enter="transition-opacity duration-75 drawer-slide-right"
      enterFrom="opacity-0"
      enterTo="opacity-100 "
      leave="transition-opacity duration-150 drawer-slide-left"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex flex-col h-screen bg-black w-60 ">
        <ul className="flex-col text-white pl-4 mt-10">
          <li
            className="font-semibold my-4"
            onClick={(e) => {
              document.getElementById('projects')?.scrollIntoView()
              onClose(e)
            }}
          >
            <a href="#projects" className="hover:text-slate-400 transition delay-75 duration-200">
              Projects
            </a>
          </li>
          <li className="font-semibold my-4" onClick={onClose}>
            <a href="#contact-me" className="hover:text-slate-400 transition delay-75 duration-200">
              Contact me
            </a>
          </li>
        </ul>
        <ul className="flex justify-between px-2 mt-auto mb-10">
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
      </div>
      <div className="bg-slate-700 opacity-50 w-full text-white" onClick={onClose} />
    </Transition>
  )
}

export default Drawer
