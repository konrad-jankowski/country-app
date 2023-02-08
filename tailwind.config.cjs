/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-blue": /* ('Dark Mode Elements')  */ "hsl(209, 23%, 22%)",
        "very-dark-blue": /* (Dark Mode Background) */ "hsl(207, 26%, 17%)",
        white: "hsl(0, 0%, 100%)",
        "text-lm": "hsl(200, 15%, 8%)",
        "bg-lm": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
