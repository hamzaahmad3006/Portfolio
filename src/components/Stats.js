import React from 'react';
import { stats } from '../data';  
import parse from 'html-react-parser'

export default function Stats() {
    return (
        <>
            {stats.map(({ no, title }, index) => {
                return (
                    <div className="bg-container-color border border-border-color p-6 pb-7 rounded-[18px] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_16px_32px_rgba(0,0,0,0.12)] hover:border-first-color" key={index}>
                        <h3 className="text-first-color text-[46px] font-bold leading-[1.1]">{no}</h3>
                        <p className="mt-1 pl-[45px] relative text-[14px] font-medium leading-[1.5] uppercase tracking-wide text-text-color before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[30px] before:h-[2px] before:rounded-full before:bg-first-color">{parse(title)}</p>
                    </div>
                );
            })}
        </>
    );
}
