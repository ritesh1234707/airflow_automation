/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#050505",
          surface: "#0D0D0D",
          surfaceCard: "#121212",
          surfaceHover: "#181818",
          border: "rgba(255, 255, 255, 0.12)",
          lime: "#B4F73C",
          limeHover: "#9EF01A",
          limeDark: "#172E04",
          emerald: "#10B981",
          cyan: "#06B6D4",
          textMuted: "#9CA3AF",
          textLight: "#FFFFFF",
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-lime': '0 0 30px -5px rgba(180, 247, 60, 0.4)',
        'glow-lime-sm': '0 0 15px -3px rgba(180, 247, 60, 0.3)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.3)',
        'glass-holo': '0 20px 50px rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        'holo-glow': 'radial-gradient(circle at 50% 20%, rgba(180, 247, 60, 0.08), rgba(16, 185, 129, 0.04) 45%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
