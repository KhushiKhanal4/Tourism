/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Kanit, sans-serif"],
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.4)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        'xl': '5px 5px 10px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xl': {
          textShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)',
        },
        
      }

      addUtilities(newUtilities)
    }
  ],
}

