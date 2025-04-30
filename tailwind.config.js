/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{html,js,ts}', '!./node_modules/**/*'],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/src/assets/images/background.png')",
      },
    },
  },
  plugins: [],
};
