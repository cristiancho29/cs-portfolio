const NavBarLoading = () => {
  return (
    <nav className="bg-black  sticky top-0 transition-all duration-300 py-7 px-5 z-10  not-mobile:px-11">
      <ul className="flex">
        <li className="list-none skeleton-pulse w-8 h-2 rounded-xl mr-5" />
        <li className="list-none skeleton-pulse w-8 h-2 rounded-xl mr-5" />
        <li className="list-none skeleton-pulse w-8 h-2 rounded-xl mr-5" />
      </ul>
    </nav>
  )
}

export default NavBarLoading
