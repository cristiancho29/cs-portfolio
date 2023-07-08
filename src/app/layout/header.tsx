import Image from 'next/image'

export const Header = () => {
  return (
    <header className="h-screen bg-slate-800 text-white">
      <Image
        src="https://www.facebook.com/photo/?fbid=10224135048462752&set=a.1596867680391"
        alt="me_photo"
      />
    </header>
  )
}
