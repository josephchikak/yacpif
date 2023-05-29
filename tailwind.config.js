/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homebg': "url('/yacpif/src/assets/images/image2.jpg')",
      }
    },
  },
  plugins: [],
}

