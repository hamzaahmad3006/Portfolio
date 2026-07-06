import React from 'react'
import { skills } from '../data'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skills() {
  return (
    <>
    {skills.map(({title,percentage},index)=>{
        return(
            <div
              className="group flex flex-col items-center bg-container-color border border-border-color rounded-[18px] py-7 px-4 transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)] hover:border-first-color"
              key={index}
            >
                <div className="w-[110px] h-[110px] mx-auto transition-transform duration-300 group-hover:scale-105">
                    <CircularProgressbar
                      strokeWidth={8.5}
                      text={`${percentage}%`}
                      value={percentage}
                      styles={buildStyles({
                        pathColor: `var(--first-color)`,
                        textColor: `var(--first-color)`,
                        trailColor: `var(--border-color)`,
                        pathTransitionDuration: 2
                      })}
                    />
                </div>
                <div className="text-center mt-5 font-second text-[16px] font-semibold text-title-color">{title}</div>
            </div>
        )
    })}
    </>
  )
}
