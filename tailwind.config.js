/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wknd: {
          bg: '#1C0A35',
          bgGradient: '#2A085C',
          surface: '#261342',
          surfaceDark: '#120624',
          surfaceHigh: '#331B58',
          yellow: '#FFE600',
          yellowHover: '#FFD700',
          yellowGlow: 'rgba(255, 230, 0, 0.35)',
          purpleText: '#8A76A7',
          mutedText: '#CBC4CF',
          border: 'rgba(255, 255, 255, 0.1)',
          borderGlow: 'rgba(255, 230, 0, 0.4)',
        }
      },
      fontFamily: {
        headline: ['Montserrat', 'sans-serif'],
        body: ['Work Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(255, 230, 0, 0.3)',
        'neon-lg': '0 0 35px rgba(255, 230, 0, 0.45)',
        'purple-glow': '0 0 30px rgba(42, 8, 92, 0.8)',
      }
    },
  },
  plugins: [],
}
