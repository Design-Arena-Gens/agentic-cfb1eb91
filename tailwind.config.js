/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'DM Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"]
      },
      colors: {
        midnight: "#0e1824",
        peach: "#ffb38e",
        cream: "#fef6e4",
        slate: "#5a6b7a"
      }
    }
  },
  plugins: []
};
