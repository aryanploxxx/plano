// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-gradient': 'linear-gradient(251.2deg, rgba(221, 248, 255, 0.3) 0%, #E6DDFF 40.29%)',
      },
      screens: {
        'xs': '360px',
        'sm': '480px',
        'md': '768px',    // you can override Tailwind's defaults
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',  // custom large screen
      },

    },
  },
  plugins: [],
};
