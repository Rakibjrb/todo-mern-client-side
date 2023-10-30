/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playpen: ["Playpen Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
