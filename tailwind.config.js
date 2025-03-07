/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        black: {
          'text': "#151515",
        },
        yellow: {
          100: "#FFAE0D",
        },
      }
    },
  },
  corePlugins: {
    container: false, // Disables Tailwind's container class
  },
  plugins: [],
}