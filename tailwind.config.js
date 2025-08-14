/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#0A192F',
  			accent: '#FF6B00',
  			background: '#F5F5F5'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
			marquee: {
			'0%': { transform: 'translateX(300%)' },
			'100%': { transform: 'translateX(-100%)' },
			},
			p_marquee: {
			'0%': { transform: 'translateX(100%)' },
			'100%': { transform: 'translateX(-100%)' },
			}
		},
		animation: {
			marquee: 'marquee 30s linear infinite',
			p_marquee: 'p_marquee 10s linear infinite'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
