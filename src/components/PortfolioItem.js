import React, { useState } from 'react'
import Close from '../assets/close.svg'

export default function PortfolioItem({ img, title, details, delay }) {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    };
    return (
        <div 
            className="relative rounded-[15px] overflow-hidden cursor-pointer group font-outfit shadow-sm hover:shadow-2xl transition-all duration-500 animate-fadeInUp"
            style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
        >
            <img src={img} alt="" className="w-full h-[280px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[3px]" />

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" onClick={toggleModal}>
                <div className="bg-first-color py-4 px-8 rounded-[15px] border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] -translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-white text-[18px] font-bold tracking-wide uppercase">{title}</h3>
                </div>
            </div>

            {modal && (
                <div className="fixed inset-0 bg-black/70 z-[1100] grid place-items-center p-4" onClick={toggleModal}>
                    <div className="bg-container-color max-w-[650px] w-full p-8 relative rounded-[10px] animate-scaleIn sm:p-5" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={Close} 
                            alt="Close" 
                            className="absolute -top-[30px] -right-[35px] md:-top-[20px] md:-right-[10px] w-[50px] h-[50px] invert-[0.8] cursor-pointer" 
                            onClick={toggleModal}
                        />

                        <h3 className="text-center text-first-color text-[26px] font-bold mb-6 tracking-[2px] uppercase lg:text-[22px]">{title}</h3>

                        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-3 mb-8">
                            {details.map(({ icon, title, desc }, index) => {
                                return (
                                    <li className="flex items-center gap-x-2" key={index}>
                                        <span className="flex text-title-color text-[18px]">{icon}</span>

                                        <div className="flex items-center gap-x-1.5 overflow-hidden">
                                            <span className="text-title-color text-[14px] whitespace-nowrap">{title}</span>
                                            {title.includes('Preview') ? (
                                                <a 
                                                    href={desc.startsWith('http') ? desc : `https://${desc}`} 
                                                    target="_blank" 
                                                    rel="noreferrer" 
                                                    className="text-first-color text-[14px] font-bold truncate hover:underline"
                                                >
                                                    {desc}
                                                </a>
                                            ) : (
                                                <span className="text-title-color text-[14px] font-bold truncate opacity-80">{desc}</span>
                                            )}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                        <img src={img} alt="" className="w-full h-[350px] sm:h-[250px] object-cover rounded-[5px] shadow-lg" />
                    </div>
                </div>
            )}
        </div>
    )
}