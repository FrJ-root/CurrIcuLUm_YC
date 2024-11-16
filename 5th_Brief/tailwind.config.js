/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        MainColor: '#008888',  // Custom color1
        Maincolor1:'#015A58',  // Custom color2
      },
      fontFamily: {
        customFont: ["'Amazon Ember'", 'sans-serifArial, sans-serif'],// custom font-Family
      },
    },
  },
  plugins: [],
}

