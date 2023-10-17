const starlightPlugin = require("@astrojs/starlight-tailwind");

const accent = {
  200: "#c52727",
  600: "#c52727",
  900: "#5a1815",
  950: "#3e1512"
};
const gray = {
  100: "#ffffff",
  200: "#f6f6f6",
  300: "#eeeeee",
  400: "#c2c2c2",
  500: "#383838",
  700: "#272727",
  800: "#181818",
  900: "#000000"
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray
      },
      fontFamily: {
        // Your preferred text font. Starlight uses a system font stack by default.
        sans: ['"EB Garamond Variable"'],
        // Your preferred code font. Starlight uses system monospace fonts by default.
        mono: ['"IBM Plex Mono"']
      }
    }
  },
  plugins: [starlightPlugin()]
};
