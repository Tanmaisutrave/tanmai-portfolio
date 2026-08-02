/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        background: '#FFFFFF',
        'bg-secondary': '#F8FAFC',
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'accent-blue': '#2563EB',
        border: '#E2E8F0',
        card: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
