/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       
        PlayfairDisplaySC:[
          "Playfair Display SC"
        ],
        Lato:["Lato"],
      }
    },

  },
  plugins: [require("daisyui")],
}

