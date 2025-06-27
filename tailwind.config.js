/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'colorado-blue': '#4A90A4',
        'colorado-sky': '#87CEEB',
        'mountain-snow': '#F8FAFC',
        'denver-red': '#C53030',
        'denver-gold': '#FFD700',
        'forest-green': '#2F855A',
        'slate-blue': '#4299E1'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'mountain-gradient': 'linear-gradient(to bottom, #87CEEB 0%, #4A90A4 100%)',
        'hero-mountain': 'linear-gradient(to bottom, rgba(74, 144, 164, 0.8), rgba(74, 144, 164, 0.9))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
