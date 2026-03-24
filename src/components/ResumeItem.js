import React from 'react'
import parse from 'html-react-parser'

export default function ResumeItem({icon,year,title,desc}) {
  return (
    <div className="relative pl-[70px] pb-[50px] after:content-[''] after:absolute after:left-[27px] after:top-0 after:w-[1px] after:h-full after:bg-border-color last:pb-0">
        <div className="absolute left-0 top-0 bg-first-color text-white w-10 h-10 rounded-full grid place-items-center z-[1]">{icon}</div>
        <span className="bg-container-color px-[15px] py-[1px] rounded-[20px] text-[12px] font-semibold text-title-color">{year}</span>
        <h3 className="text-[18px] font-medium mt-[18px] mb-[10px] text-title-color uppercase">{parse(title)}</h3>
        <p className="text-[15px] leading-[1.6] text-text-color">{desc}</p>
    </div>
  )
}
