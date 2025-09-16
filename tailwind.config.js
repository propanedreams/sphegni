// tailwind.config.js (ESM since Astro uses ESM)
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#faf8f6",
          100: "#f4f1ee",
          200: "#e3ddd2",
          300: "#c7bca9",
          400: "#a58d6d",
          500: "#8c704e", // medium earthy brown
          600: "#70583d", // darker
          700: "#574330",
          800: "#3d2e21",
          900: "#241b13",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [typography()],
};
