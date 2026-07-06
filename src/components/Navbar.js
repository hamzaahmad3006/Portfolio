import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../data'

export default function Navbar() {
  const [showmenu, setshowmenu] = useState(false)

  return (
    <nav className="fixed right-0 lg:right-[26px] inset-y-0 flex items-center z-[1000] pointer-events-none">
      {/* Menu panel (full-screen overlay on mobile, floating dock on desktop) */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto transition-all duration-500 bg-body-color/95 backdrop-blur-lg lg:static lg:bg-transparent lg:backdrop-blur-0 lg:inset-auto lg:h-auto lg:w-auto ${
          showmenu
            ? 'left-0 opacity-100 visible'
            : '-left-full lg:left-0 opacity-0 lg:opacity-100 invisible lg:visible'
        }`}
      >
        <ul className="flex flex-col items-center gap-2 lg:gap-1.5 lg:p-2 lg:rounded-full lg:bg-container-color/50 lg:backdrop-blur-md lg:border lg:border-border-color lg:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)]">
          {links.map(({ name, icon, path }, index) => {
            // The theme toggle has no path — render it as a plain circle, not a link
            if (!path) {
              return (
                <li className="lg:mt-1 lg:pt-2 lg:border-t lg:border-border-color w-full flex justify-center" key={index}>
                  <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-container-color text-title-color hover:bg-first-color hover:text-white transition-all duration-300">
                    {icon}
                  </div>
                </li>
              )
            }

            return (
              <li className="group relative flex justify-center" key={index}>
                <NavLink
                  to={path}
                  onClick={() => setshowmenu(false)}
                  className={({ isActive }) =>
                    `relative flex items-center justify-center w-[48px] h-[48px] rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-first-color text-white shadow-lg shadow-first-color/30 scale-105'
                        : 'bg-container-color text-title-color hover:bg-first-color hover:text-white hover:scale-105'
                    }`
                  }
                >
                  {/* Active indicator dot */}
                  {({ isActive }) => (
                    <>
                      <span className="text-[19px]">{icon}</span>
                      <span
                        className={`hidden lg:block absolute -left-[9px] top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-first-color transition-all duration-300 ${
                          isActive ? 'h-5 opacity-100' : 'h-0 opacity-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>

                {/* Hover tooltip (desktop only) */}
                <span className="pointer-events-none absolute right-[58px] top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-first-color text-white text-[13px] font-semibold whitespace-nowrap opacity-0 translate-x-2 invisible transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible hidden lg:block shadow-lg">
                  {name}
                  <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45 bg-first-color" />
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Mobile hamburger toggle */}
      <div
        className="lg:hidden fixed top-[26px] right-[26px] w-11 h-11 bg-container-color rounded-xl flex flex-col items-center justify-center gap-[5px] z-[10000] cursor-pointer pointer-events-auto shadow-md border border-border-color"
        onClick={() => setshowmenu(!showmenu)}
        aria-label="Toggle navigation menu"
      >
        <span className={`w-5 h-[2px] bg-title-color rounded-full transition-transform duration-300 ${showmenu ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`w-5 h-[2px] bg-title-color rounded-full transition-opacity duration-300 ${showmenu ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`w-5 h-[2px] bg-title-color rounded-full transition-transform duration-300 ${showmenu ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </div>
    </nav>
  )
}
