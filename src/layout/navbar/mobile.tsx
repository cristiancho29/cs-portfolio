'use client'

import Drawer from './drawer'
import MenuIcon from '@/assets/svg/list.svg'

import classNames from 'classnames'
import { usePortal } from '@/hooks/usePortal'
import { MouseEventHandler, useState } from 'react'

const NavBarMobile = ({ hidden }: { hidden: boolean }) => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault()
    setOpenDrawer(!openDrawer)
  }

  const handleOnClose: MouseEventHandler = (e) => {
    e.preventDefault()
    setOpenDrawer(false)
  }

  const drawerPortal = usePortal({
    portalId: 'portal',
    portalContent: <Drawer open={openDrawer} onClose={handleOnClose} />,
  })
  return (
    <nav
      id="navbar"
      className={classNames('bg-black sticky top-0 transition-all duration-300 py-3 px-5 z-10', {
        'top-[-70px]': hidden,
      })}
    >
      <button
        className="outline-none bg-black border border-white rounded-sm p-[7px]"
        onClick={handleClick}
      >
        <MenuIcon className="text-white" />
      </button>
      {drawerPortal}
    </nav>
  )
}

export default NavBarMobile
