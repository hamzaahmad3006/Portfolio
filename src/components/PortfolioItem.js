import React, { useState, useEffect } from 'react'
import { FiExternalLink, FiEye, FiX, FiArrowUpRight, FiGithub } from 'react-icons/fi'

export default function PortfolioItem({ img, title, type, description, tags = [], link, repo, featured, delay }) {
  const [modal, setModal] = useState(false)

  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

  // Lock body scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modal])

  const normalizedLink = link ? (link.startsWith('http') ? link : `https://${link}`) : null

  return (
    <>
      <article
        className="group relative flex flex-col rounded-[20px] overflow-hidden bg-container-color border border-border-color shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fadeInUp"
        style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
      >
        {/* Image */}
        <div className="relative h-[230px] overflow-hidden">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
          />

          {/* Gradient wash + hover actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Category / featured badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 text-[#111] backdrop-blur-sm">
              {type}
            </span>
            {featured && (
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-first-color text-white shadow-lg">
                Featured
              </span>
            )}
          </div>

          {/* Hover action buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-2.5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <button
              onClick={openModal}
              aria-label={`View details for ${title}`}
              className="flex items-center gap-2 bg-white text-[#111] text-[13px] font-bold px-4 py-2.5 rounded-full shadow-xl hover:bg-first-color hover:text-white transition-colors duration-300"
            >
              <FiEye className="text-[16px]" /> Details
            </button>
            {normalizedLink && (
              <a
                href={normalizedLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open live demo of ${title}`}
                className="flex items-center gap-2 bg-first-color text-white text-[13px] font-bold px-4 py-2.5 rounded-full shadow-xl hover:bg-white hover:text-first-color transition-colors duration-300"
              >
                <FiExternalLink className="text-[16px]" /> Live
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`View source code of ${title}`}
                className="grid place-items-center w-[42px] h-[42px] bg-[#111] text-white rounded-full shadow-xl hover:bg-first-color transition-colors duration-300"
              >
                <FiGithub className="text-[18px]" />
              </a>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-[18px] font-bold text-title-color leading-snug mb-2 group-hover:text-first-color transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[13.5px] text-text-color leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-first-color/10 text-first-color"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1100] grid place-items-center p-4 animate-fadeInUp"
          style={{ animationDuration: '0.3s' }}
          onClick={closeModal}
        >
          <div
            className="relative bg-body-color w-full max-w-[720px] max-h-[90vh] overflow-y-auto rounded-[20px] border border-border-color shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 grid place-items-center rounded-full bg-black/40 text-white hover:bg-first-color hover:rotate-90 transition-all duration-300"
            >
              <FiX className="text-[20px]" />
            </button>

            <div className="relative h-[280px] sm:h-[220px] overflow-hidden rounded-t-[20px]">
              <img src={img} alt={title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-body-color via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-first-color text-white">
                  {type}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-5">
              <h3 className="text-[24px] font-bold text-title-color mb-3">{title}</h3>
              <p className="text-[15px] text-text-color leading-relaxed mb-6">{description}</p>

              <div className="mb-6">
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-title-color mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] font-semibold px-3 py-1.5 rounded-lg bg-first-color/10 text-first-color"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {normalizedLink ? (
                  <a
                    href={normalizedLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 bg-first-color text-white text-[14px] font-bold px-6 py-3 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Visit Live Project
                    <FiArrowUpRight className="text-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-text-color/70 border border-border-color px-5 py-3 rounded-full">
                    Private / Concept Project
                  </span>
                )}
                {repo && (
                  <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-border-color text-title-color text-[14px] font-bold px-6 py-3 rounded-full hover:border-first-color hover:text-first-color transition-all duration-300"
                  >
                    <FiGithub className="text-[18px]" /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
