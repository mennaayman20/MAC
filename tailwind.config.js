/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
         'bounce-once': 'bounce 0.9s ease-in-out 2',
      },
    },
  },
  plugins: [
     require("flowbite/plugin"),
  ],
}

