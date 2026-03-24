import React from 'react'
import { skills } from '../data'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skills() {
  return (
    <>
    {skills.map(({title,percentage},index)=>{
        return(
            <div className="flex flex-col items-center" key={index}>
                <div className="w-[120px] h-[120px] mx-auto">
                    <CircularProgressbar 
                      strokeWidth={8.5} 
                      text={`${percentage}%`} 
                      value={percentage}
                      styles={buildStyles({
                        pathColor: `hsl(225, 73%, 57%)`,
                        textColor: `hsl(225, 73%, 57%)`,
                        trailColor: `var(--container-color)`,
                        pathTransitionDuration: 2
                      })}
                    />
                </div>
                <div className="text-center mt-6 font-second text-[18px] font-medium text-title-color">{title}</div>
            </div>
        )
    })}
    </>
  )
}
