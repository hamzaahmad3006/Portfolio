import React, { useState, useEffect } from 'react'
import Profile from '../../assets/home.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const roles = ["MERN Stack Developer", "Web Developer", "React Native Developer"];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20, 
        y: (e.clientY / window.innerHeight - 0.5) * 20 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const currentText = roles[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentText.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, roles]);

  return (
    <main className="relative min-h-screen lg:h-screen lg:overflow-hidden flex items-center justify-center lg:block font-outfit">
      {/* Decorative Background Block - Premium Gradient with Parallax */}
      <div 
        className="fixed h-[200%] w-full bg-gradient-to-br from-first-color via-first-color to-[#2c3e50] -top-1/2 -left-[83%] -rotate-[15deg] hidden lg:block -z-[-1] transition-all duration-700 opacity-90"
        style={{ transform: `rotate(-15deg) translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
      ></div>

      <section className="relative z-10 grid lg:grid-cols-[4.32fr_7.68fr] items-center p-5 lg:p-10 min-h-screen lg:h-screen gap-10 lg:gap-x-20 flex flex-col lg:flex-row justify-center">
        {/* Profile Image with Parallax and Scale Entrance */}
        <div 
           className="hidden lg:block h-full overflow-hidden rounded-[30px] shadow-2xl animate-scaleIn"
           style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >
            <img src={Profile} alt="Profile" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
        </div>
        
        {/* Mobile Profile Image */}
        <div className="lg:hidden w-[150px] h-[150px] mx-auto rounded-full border-4 border-first-color/30 overflow-hidden shadow-xl mb-8 animate-scaleIn">
            <img src={Profile} alt="Profile" className="w-full h-full object-cover object-top" />
        </div>

        <div className="home_content lg:pl-10">
          <div className="max-w-[600px] mx-auto lg:mx-0 pt-[20px] text-center lg:text-left">
            <h1 className="relative text-[36px] lg:text-[52px] lg:pl-[70px] leading-[1.24] font-extrabold text-[#2c3e50] before:hidden lg:before:block before:content-[''] before:absolute before:left-0 before:top-[22%] before:w-12 before:h-1.5 before:rounded-full before:bg-first-color animate-fadeInLeft opacity-0 [animation-delay:200ms]">
              <span className="tracking-tight">I'm Hamza Ahmad.</span><br />
              <span className="text-[32px] lg:text-[45px] font-bold text-first-color tracking-tight">{displayedText}<span className="animate-blink font-thin text-first-color">|</span></span>
            </h1>
            <p className="leading-[1.6] lg:leading-[2.125] my-6 lg:mb-10 lg:mt-6 text-text-color lg:text-[17px] font-medium animate-fadeInUp opacity-0 [animation-delay:400ms]">
              Hi, I'm a professionally trained MERN Stack developer passionate about building responsive, user-friendly web applications. I specialize in creating seamless front-end experiences and robust back-end solutions.
            </p>
            <Link to="/about" className="group glass-dark relative inline-flex items-center h-[60px] px-10 pr-[80px] border border-first-color/20 rounded-full text-title-color text-[16px] font-bold transition-all duration-500 hover:text-white hover:-translate-y-1 hover:shadow-2xl overflow-hidden animate-fadeInUp opacity-0 [animation-delay:600ms]">
               More About Me 
              <span className="absolute right-[3px] top-[3px] w-[54px] h-[54px] bg-first-color text-white rounded-full flex items-center justify-center text-[20px] transition-all duration-500 group-hover:bg-white shadow-lg">
                <FaArrowRight className="transition-all duration-500 group-hover:translate-x-1 group-hover:text-first-color" />
              </span>
              <div className="absolute inset-0 bg-first-color -z-10 translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0"></div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
