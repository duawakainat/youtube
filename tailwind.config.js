/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultConfig");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  // important: true,
  theme: {
    // ...defaultTheme,
    // colors:{
    //   ...defaultTheme.colors,
    //   primary: '#456789',
    //   white: '#fff',
    //   text:{
    //     DEFAULT: '#557789',
    //     light: '#456789'
    //   },
    //  light:{
    //     DEFAULT: '#875789',
    //     lighter: '#466234+'
    //   },
    // },
    // screens: {
    //   'lg': '1200px',
    // },
    extend: {
      
    },
  },
  plugins: [
  ],
}
