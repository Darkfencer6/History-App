/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pblack: ["Poppins-Black" , "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
      },
      backgroundColor:{
        "brand-input": "#74FF33",
      }

    },
  },
  plugins: ["nativewind/babel"],
}

