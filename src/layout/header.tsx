import Image from 'next/image'
import mePhoto from '@/assets/images/me_photo.jpg'

const Header = () => {
  return (
    <header className="h-[800px] bg-slate-800 header-pattern flex justify-center items-center header-pattern-change not-mobile:px-11 px-8">
      <div className="flex flex-col justify-center items-center bg-slate-400 text-slate-800 rounded-2xl p-8 header-content-change-opacity">
        <Image className="h-[200px] w-[200px] rounded-full" src={mePhoto} alt="me_photo" />
        <h1 className="text-4xl font-bold p-2 rounded mt-2 text-center">Cristian Suárez</h1>
        <p className="font-semibold text-center">Software Engineer - Frontend React Developer</p>
      </div>
    </header>
  )
}

export default Header
