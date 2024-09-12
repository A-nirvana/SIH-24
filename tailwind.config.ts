import type { Config } from "tailwindcss";
import daisyui from "daisyui";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        footerDark : "hsl(var(--footer-dark))",
        background : "hsl(var(--background-white))",
        specialGreen : "hsl(var(--button-green))",
        specialPurple : "hsl(var(--button-purple))",
        dullGray : "hsl(var(--background-gray))",
        customGray: "rgba(212, 214, 215, 1)",
        customBlueLight: "rgba(21, 76, 124, 0.74)",
        customBlueDark: "rgba(0, 61, 114, 1)",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
