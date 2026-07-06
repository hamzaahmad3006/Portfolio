import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import "./DarkAndLightMode.css";

export default function DarkAndLightMode() {
  // Initialise from the saved preference so the toggle icon matches the page.
  // Defaults to dark mode unless the visitor previously chose light.
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  // Keep the <body> class and saved preference in sync with the state.
  useEffect(() => {
    document.body.classList.toggle('dark-mode', mode === 'dark');
    try {
      localStorage.setItem('theme', mode);
    } catch (e) {}
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="button_mode">

    <button onClick={toggleMode} className='mode_button'>
      {mode === 'light' ? <FaMoon /> : <FaSun />}
    </button>
    </div>
  );
}
