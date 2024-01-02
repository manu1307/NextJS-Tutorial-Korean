import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        vercel: {
          100: "#000000",
          200: "#efefef",
          300: "#dcdcdc",
          400: "#bdbdbd",
          500: "#989898",
          600: "#7c7c7c",
          700: "#656565",
          800: "#525252",
          900: "#464646",
        },
      },
    },
  },

  plugins: [],
};
export default config;
