import React from 'react'
import parse from 'html-react-parser'

export default function ResumeItem({ icon, year, title, desc }) {
  return (
    <div className="relative pl-[60px] pb-8 last:pb-0 after:content-[''] after:absolute after:left-[19px] after:top-[44px] after:w-[2px] after:h-[calc(100%-44px)] after:bg-border-color">
      {/* Timeline node */}
      <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-first-color text-white grid place-items-center text-[15px] shadow-lg shadow-first-color/25 ring-4 ring-body-color z-[1]">
        {icon}
      </div>

      {/* Card */}
      <div className="group bg-container-color border border-border-color rounded-2xl p-5 transition-all duration-300 hover:border-first-color hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.1)]">
        <span className="inline-block bg-first-color/10 text-first-color px-3 py-1 rounded-full text-[11.5px] font-bold tracking-wide mb-3">
          {year}
        </span>
        <h3 className="text-[15.5px] font-bold text-title-color mb-2 leading-snug [&_span]:text-first-color [&_span]:font-semibold">
          {parse(title)}
        </h3>
        <p className="text-[14px] leading-[1.65] text-text-color">{desc}</p>
      </div>
    </div>
  )
}
