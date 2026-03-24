import React from 'react'
import Info from '../../components/Info'
import Stats from '../../components/Stats'
import { FaDownload } from 'react-icons/fa'
import Skills from '../../components/Skills'
import { resume } from '../../data'
import ResumeItem from '../../components/ResumeItem'
import CV from '../../assets/Hamza.pdf'

export default function About() {
  return (
    <main className="pt-20 pb-20 max-w-[1140px] mx-auto overflow-hidden">
      <section className="animate-fadeInUp">
        <h2 className="text-[44px] font-bold text-center mb-16 uppercase tracking-[2px] text-title-color">
          About <span className="text-first-color">Me</span>
        </h2>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-x-[70px] items-start">
          <div className="animate-fadeInUp">
            <h3 className="text-[26px] font-semibold mb-6 text-title-color">Personal Infos</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 mb-8">
              <Info />
            </ul>

            <a href={CV} download className="group relative inline-flex items-center h-[55px] px-8 pr-[70px] border border-first-color rounded-[35px] text-title-color text-[15px] font-semibold transition-all duration-400 hover:text-white hover:-translate-y-0.5 hover:shadow-lg overflow-hidden">
              Download CV
              <span className="absolute right-[-1px] top-[-1px] w-[55px] h-[55px] bg-first-color text-white rounded-full flex items-center justify-center text-[18px] transition-all duration-400 group-hover:bg-white">
                <FaDownload className="transition-all duration-400 group-hover:text-first-color" />
              </span>
              <div className="absolute inset-0 bg-first-color -z-10 translate-x-full transition-transform duration-400 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:translate-x-0"></div>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] animate-fadeInUp mt-10 lg:mt-0">
            <Stats />
          </div>
        </div>
      </section>

      <div className="border-t border-border-color max-w-[40%] mx-auto my-[72px] mb-[56px]"></div>

      <section className="animate-fadeInUp">
        <h3 className="text-center text-[26px] font-semibold mb-12 text-title-color">My Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          <Skills />
        </div>
      </section>

      <div className="border-t border-border-color max-w-[40%] mx-auto my-[72px] mb-[56px]"></div>

      <section className="animate-fadeInUp">
        <h3 className="text-center text-[26px] font-semibold mb-12 text-title-color">Experience & Education</h3>
        <div className="grid md:grid-cols-2 gap-[30px]">
          <div className="resume_data">
            {resume.map((val) => {
              if (val.category === 'experience') {
                return <ResumeItem key={val.id} {...val} />
              }
              return null;
            })}
          </div>

          <div className="resume_data">
            {resume.map((val) => {
              if (val.category === 'education') {
                return <ResumeItem key={val.id} {...val} />
              }
              return null;
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
