module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "640xp",
      // => @media (min-width: 640xp) { ... }

      md: "768xp",
      // => @media (min-width: 768xp) { ... }

      lg: "1024xp",
      // => @media (min-width: 1024xp) { ... }

      xl: "1280xp",
      // => @media (min-width: 1280xp) { ... }

      "2xl": "1536px"
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
