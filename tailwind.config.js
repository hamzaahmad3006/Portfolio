/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': 'var(--first-color)',
        'title-color': 'var(--title-color)',
        'text-color': 'var(--text-color)',
        'body-color': 'var(--body-color)',
        'container-color': 'var(--container-color)',
        'border-color': 'var(--border-color)',
      },
      fontFamily: {
        body: ['Outfit', 'sans-serif'],
        second: ['Outfit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        progress: {
          '0%': { strokeDasharray: '0 100' },
        },
        blink: {
          '50%': { opacity: '0' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.8s ease-out forwards',
        scaleIn: 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        progress: 'progress 2s ease-in-out forwards',
        blink: 'blink 1s step-start infinite',
      }
    },
  },
  plugins: [],
}
