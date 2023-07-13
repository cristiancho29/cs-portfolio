import Image from 'next/image'
import mePhoto from '@/assets/images/me_photo.jpg'

const Header = () => {
  return (
    <header className="h-screen bg-slate-800 text-white header-pattern flex flex-col justify-center items-center">
      <Image className="h-[200px] w-[200px] rounded-full" src={mePhoto} alt="me_photo" />
      <h1 className="text-4xl bg-slate-400 text-slate-800 p-2 rounded mt-2">Cristian Suárez</h1>
    </header>
  )
}

export default Header
