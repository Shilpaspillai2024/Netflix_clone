/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      fontFamily:{
        "nsans-light" :["Nsans Light"],
        "nsans-medium" :["Nsans Medium"],
        "nsans-bold" :["Nsans Bold"],
        "nsans-regular" :["Nsans Regular"]
      },

      maskImage: {
        'gradient-mask': 'linear-gradient(to right, transparent, black 75%)',
      },
      webkitMaskImage: {
        'gradient-mask': 'linear-gradient(to right, transparent, black 75%)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
