import Image from 'next/image'
import mePhoto from '@/assets/images/me_photo.jpg'

const Header = () => {
  return (
    <header className="h-screen bg-slate-800 text-white header-pattern flex justify-center items-center pt-16">
      <div className="flex flex-col justify-center items-center bg-slate-400 text-slate-800 rounded-2xl p-8 scale-in-center">
        <Image className="h-[200px] w-[200px] rounded-full" src={mePhoto} alt="me_photo" />
        <h1 className="text-4xl font-bold p-2 rounded mt-2">Cristian Suárez</h1>
        <p className="font-semibold">Software Engineer - Frontend React Developer</p>
      </div>
    </header>
  )
}

export default Header
