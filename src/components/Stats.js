import React from 'react';
import { stats } from '../data';  
import parse from 'html-react-parser'

export default function Stats() {
    return (
        <>
            {stats.map(({ no, title }, index) => {
                return (
                    <div className="border border-border-color p-5 pb-6 rounded-[5px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-first-color" key={index}>
                        <h3 className="text-first-color text-[44px] font-bold leading-[1.2]">{no}</h3>
                        <p className="pl-[45px] relative text-[15px] leading-[1.6] uppercase before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-[30px] before:h-[1px] before:bg-text-color">{parse(title)}</p>
                    </div>
                );
            })}
        </>
    );
}
