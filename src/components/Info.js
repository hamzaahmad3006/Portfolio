import React from 'react'
import { personalInfo } from '../data'

export default function Info() {
  return (
    <>
    {personalInfo.map(({title,description},index)=>{
        return(
            <li className="flex items-center gap-x-2" key={index}>
                <span className="whitespace-nowrap text-[15px] text-text-color">{title}</span>
                <span className="block text-[15px] font-semibold text-title-color break-all">{description}</span>
            </li>
        )
    })}
    </>
  )
}
