'use client'
import { useIntersectionObserverState } from '@/hooks/useIntersectionObserver'
import ContactMeForm from './contact-me-form'
import classNames from 'classnames'

const ContactMe = () => {
  const { cbRef, hidden } = useIntersectionObserverState({ threshold: 0.5 })

  return (
    <section
      id="contact-me"
      ref={cbRef}
      className={classNames('w-full px-5 not-mobile:px-12 py-10', { invisible: hidden })}
    >
      <h1
        className={classNames('text-slate-400 font-bold text-4xl', { 'slide-in-title': !hidden })}
      >
        Contact Me
      </h1>
      <ContactMeForm hidden={hidden} />
    </section>
  )
}

export default ContactMe
