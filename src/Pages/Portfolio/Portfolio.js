import React, { useMemo, useState } from 'react'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import { portfolio, portfolioCategories, githubProfile } from '../../data'
import PortfolioItem from '../../components/PortfolioItem'

// A project may belong to several categories (e.g. an AI app built for mobile).
// Supports both the new `categories: [...]` array and the old single `category`.
const catsOf = (p) => p.categories || (p.category ? [p.category] : [])

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  // Only show filter tabs that actually have projects
  const categories = useMemo(
    () =>
      portfolioCategories.filter(
        (cat) => cat.id === 'all' || portfolio.some((p) => catsOf(p).includes(cat.id))
      ),
    []
  )

  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? portfolio
        : portfolio.filter((p) => catsOf(p).includes(activeCategory)),
    [activeCategory]
  )

  return (
    <section className="pt-24 pb-24 max-w-[1140px] mx-auto px-4 font-outfit relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-[8%] right-[-6%] w-[320px] h-[320px] bg-first-color/10 blur-[130px] rounded-full -z-10 animate-pulse" />
      <div
        className="absolute bottom-[12%] left-[-6%] w-[260px] h-[260px] bg-first-color/10 blur-[110px] rounded-full -z-10 animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      {/* Header */}
      <div className="text-center max-w-[640px] mx-auto mb-14 animate-fadeInUp">
        <span className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-first-color mb-4">
          My Work
        </span>
        <h2 className="text-[38px] lg:text-[46px] font-bold uppercase tracking-[1px] text-title-color leading-tight">
          Featured <span className="text-first-color">Projects</span>
        </h2>
        <p className="mt-5 text-[15.5px] text-text-color leading-relaxed">
          A selection of applications I've designed and engineered — from AI-powered tools and
          full-stack web apps to cross-platform mobile experiences.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-14 animate-fadeInUp">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id
          const count =
            cat.id === 'all'
              ? portfolio.length
              : portfolio.filter((p) => catsOf(p).includes(cat.id)).length
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`group relative px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-300 border ${
                isActive
                  ? 'bg-first-color text-white border-first-color shadow-lg shadow-first-color/25'
                  : 'bg-transparent text-text-color border-border-color hover:border-first-color hover:text-first-color'
              }`}
            >
              {cat.label}
              <span
                className={`ml-2 text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-white/25 text-white' : 'bg-first-color/10 text-first-color'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {filtered.map((item, index) => (
            <PortfolioItem key={item.id} {...item} delay={index * 0.08} />
          ))}
        </div>
      ) : (
        <p className="text-center text-text-color py-20">No projects in this category yet.</p>
      )}

      {/* GitHub call to action */}
      <div className="mt-20 text-center animate-fadeInUp">
        <p className="text-[15px] text-text-color mb-5">
          Want to dig into the code? Explore more of my work on GitHub.
        </p>
        <a
          href={githubProfile}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 bg-title-color text-body-color text-[14px] font-bold px-7 py-3.5 rounded-full hover:bg-first-color hover:text-white hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
        >
          <FiGithub className="text-[18px]" />
          View GitHub Profile
          <FiArrowUpRight className="text-[16px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}
