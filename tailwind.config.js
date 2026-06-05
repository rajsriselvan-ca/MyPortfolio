/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        heading: ['"Sora"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          400: '#5aa1ff',
          500: '#3d83f5',
          600: '#2c66d6',
          700: '#244fa6',
        },
        ink: {
          900: '#0b1220',
          800: '#111a2c',
          700: '#1c2742',
        },
      },
      backgroundImage: {
        'grid-light':
          "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
        'aurora':
          'radial-gradient(at 20% 20%, rgba(99,102,241,0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(236,72,153,0.16) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(14,165,233,0.18) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(34,197,94,0.14) 0px, transparent 50%)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        ringPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,255,255,0.35)' },
          '50%': { boxShadow: '0 0 0 16px rgba(255,255,255,0)' },
        },
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        reverseSpin: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        auraPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.55' },
          '50%': { transform: 'scale(1.12)', opacity: '0.9' },
        },
        thunderShock: {
          '0%':   { transform: 'scale(0.55)', opacity: '0' },
          '15%':  { opacity: '1' },
          '100%': { transform: 'scale(2.4)',  opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        floatY: 'floatY 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        gradientShift: 'gradientShift 8s ease infinite',
        ringPulse: 'ringPulse 2.4s ease-out infinite',
        slowSpin: 'slowSpin 18s linear infinite',
        reverseSpin: 'reverseSpin 22s linear infinite',
        auraPulse: 'auraPulse 4s ease-in-out infinite',
        thunderShock: 'thunderShock 2.6s ease-out infinite',
      },
    },
  },
  plugins: [],
}
