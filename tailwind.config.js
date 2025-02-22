/**  @type {import('tailwindcss').Config}*/
const colors = require("tailwindcss/colors");

  

module.exports = {
  content: [
    "./app/**/*.{js, ts, jsx, tsx, mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*/.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
         "gradient-comic": "comic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
     colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    }
  },
  plugin: [],
}

