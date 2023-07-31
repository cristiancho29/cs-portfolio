import ContactMeForm from './contact-me-form'

const ContactMe = () => {
  return (
    <section id="contact-me" className="w-full px-5 not-mobile:px-12 py-10">
      <h1 className="text-slate-400 font-bold text-4xl">Contact Me</h1>
      <ContactMeForm />
    </section>
  )
}

export default ContactMe
