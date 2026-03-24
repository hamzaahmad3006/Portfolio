import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = (e) => {
            if (e.target.closest('a, button, .cursor-pointer')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
        };
    }, []);

    return (
        <div 
            className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-first-color pointer-events-none z-[99999] transition-transform duration-200 ease-out -translate-x-1/2 -translate-y-1/2 hidden lg:block ${isHovered ? 'scale-[2.5] bg-first-color/20 border-transparent' : 'scale-100'}`}
            style={{ 
                left: `${position.x}px`, 
                top: `${position.y}px`,
            }}
        >
            <div className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-first-color rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
        </div>
    );
};

export default Cursor;
