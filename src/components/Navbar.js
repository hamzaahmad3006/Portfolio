import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../data'

export default function Navbar() {
  const [showmenu, setshowmenu] = useState(false);

  return (
    <nav className="fixed right-0 lg:right-[30px] inset-y-0 flex items-center z-[1000] pointer-events-none">
      {/* Mobile Menu */}
      <div className={`fixed inset-0 glass-dark z-[9999] transition-all duration-500 flex items-center justify-center pointer-events-auto lg:static lg:bg-transparent lg:inset-auto lg:h-auto lg:w-auto ${showmenu ? 'left-0 opacity-100 visible' : '-left-full lg:left-0 opacity-0 lg:opacity-100 invisible lg:visible'}`}>
        <ul className="flex flex-col lg:block items-center">
          {links.map(({ name, icon, path }, index) => (
            <li className="my-5 lg:my-5 group flex justify-center" key={index}>
              <NavLink 
                to={path} 
                className={({ isActive }) => 
                  `relative flex items-center justify-center w-[50px] h-[50px] rounded-full bg-container-color transition-all duration-300 ${isActive ? 'bg-first-color text-white' : 'text-title-color hover:bg-first-color hover:text-white'}`
                } 
                onClick={() => setshowmenu(false)}
              >
                <span className="text-[20px]">{icon}</span>
                <h3 className="absolute top-0 right-0 bg-first-color h-full leading-[50px] px-8 pr-[25px] rounded-[30px] text-white text-[15px] font-medium opacity-0 invisible z-[-1] transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:right-[27px] group-hover:rounded-[30px_0_0_30px] whitespace-nowrap hidden lg:block">
                  {name}
                </h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Button */}
      <div 
        className="lg:hidden fixed top-[30px] right-[30px] w-10 h-10 bg-container-color rounded-[5px] flex flex-col items-center justify-center gap-[5px] z-[10000] cursor-pointer pointer-events-auto shadow-md" 
        onClick={() => setshowmenu(!showmenu)}
      >
        <span className={`w-5 h-[2px] bg-title-color rounded-full transition-transform duration-300 ${showmenu ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
        <span className={`w-5 h-[2px] bg-title-color rounded-full transition-opacity duration-300 ${showmenu ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`w-5 h-[2px] bg-title-color rounded-full transition-transform duration-300 ${showmenu ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
      </div>
    </nav>
  )
}
