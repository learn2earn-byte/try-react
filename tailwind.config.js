/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add any other paths where Tailwind classes might be used
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',     // Example blue
        secondary: '#9333EA',   // Example purple
        accent: '#F59E42',      // Example orange
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Add more plugins here as needed
  ],
}
