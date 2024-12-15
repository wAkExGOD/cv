/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--color-black, #121a1c)",
        emerald: "var(--color-emerald, #2c5d63)",
        green: "var(--color-green, #a2c11c)",
        white: "var(--color-white, #e0e0e0)",
      },
      fontFamily: {
        serif: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
}
