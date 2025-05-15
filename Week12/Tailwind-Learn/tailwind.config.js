// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx,js}", // Adjust based on your project
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          200: "#8094ad",
          500: "#19406a",
          700: "#002b5b",
        },
        green: {
          400: "#36c6c0"
        }
      }
    },
  },
  plugins: [],
};
