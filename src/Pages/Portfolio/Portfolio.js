import React from 'react'
import { portfolio } from '../../data'
import PortfolioItem from '../../components/PortfolioItem'

export default function Portfolio() {
  return (
    <section className="pt-24 pb-24 max-w-[1140px] mx-auto px-4 font-outfit relative overflow-hidden">
      {/* Decorative Background Accent */}
      <div className="absolute top-[10%] right-[-5%] w-[300px] h-[300px] bg-first-color/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[250px] h-[250px] bg-first-color/5 blur-[100px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <h2 className="text-[44px] font-bold text-center mb-20 uppercase tracking-[2px] text-title-color">
        My <span className="text-first-color">Portfolio</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item, index) => {
          return <PortfolioItem key={item.id} {...item} delay={index * 0.15} />
        })}
      </div>
    </section>
  )
}
