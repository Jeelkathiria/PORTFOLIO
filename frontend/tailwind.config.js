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
                primary: {
                    DEFAULT: '#3B82F6', // Electric Blue
                    dark: '#1D4ED8',
                    light: '#60A5FA',
                },
                accent: '#F43F5E', // Rose accent for highlights
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                cormorant: ['"Cormorant Garamond"', 'serif'], // For that premium serif feel
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
            boxShadow: {
                'glossy': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                'glossy-light': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [],
}
