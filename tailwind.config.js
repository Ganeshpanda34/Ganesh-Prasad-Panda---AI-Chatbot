/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: '#131314',   // Exact Gemini background
                    secondary: '#1c1c1d', // Slightly lighter for elevation
                    tertiary: '#2a2a2b',  // Cards/hover states
                },
                text: {
                    primary: '#e3e3e3',   // Exact Gemini text color
                    secondary: '#a0a0a0', // Secondary text
                    muted: '#6b6b6b',     // Muted text
                    'accent-blue': '#d3e3fd', // Selected text (light blue)
                },
                accent: {
                    primary: '#1f3760',   // Gemini selected/active state (dark blue)
                    secondary: '#333537', // Gemini button color (dark gray)
                    hover: '#3a3c3e',     // Hover state for buttons
                },
                border: '#2a2a2b',      // Subtle border color
            },
            backgroundImage: {
                'accent-gradient': 'linear-gradient(135deg, #1f3760 0%, #2a4570 100%)', // Updated gradient
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'spin-slow': 'spin 1s linear infinite',
                'bounce-slow': 'bounce 1.4s infinite ease-in-out both',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                bounce: {
                    '0%, 80%, 100%': { transform: 'scale(0)' },
                    '40%': { transform: 'scale(1)' },
                }
            }
        },
    },
    plugins: [],
}
