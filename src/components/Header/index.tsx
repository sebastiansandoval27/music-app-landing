import { useState } from 'react'
import Logo from '../../assets/react.svg'
import './header.css'
import Search from './Search'
import LinkItem from './LinkItem/index'

import { BsFillGridFill } from 'react-icons/bs'
import { FiRadio } from 'react-icons/fi'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 h-16 bg-grey1 px-3 py-2 flex justify-between items-center `}
      >
        <div className="logo flex justify-start items-center h-full">
          <img src={Logo} alt="Logo" />
          <h3 className="text-lg text-white ml-2">Music</h3>
        </div>
        <div
          className={`${showMenu ? 'close' : 'burguer'} md:hidden`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
      <div className={`menu bg-grey1 ${showMenu && 'show-menu'}`}>
        <ul className="flex flex-col justify-start items-center h-full w-4/5">
          <Search placeholder="Search" name="search" />
          <div className="links w-full mt-3">
            <LinkItem
              text="Explorar"
              icon={<BsFillGridFill size={19} />}
              active={true}
            />
            <LinkItem
              text="Radio"
              icon={<FiRadio size={19} />}
              active={false}
            />
          </div>
        </ul>
      </div>
    </>
  )
}

export default Header
