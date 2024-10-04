import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        google: {
          blue: "#174EA6",
          red: "#A50E0E",
          orange: "#E37400",
          green: "#0D652D",
          mediumBlue: "#4285F4",
          mediumRed: "#EA4335",
          yellow: "#FBBC04",
          mediumGreen: "#34A853",
          lightBlue: "#D2E3FC",
          lightRed: "#FAD2CF",
          lightYellow: "#FEEFC3",
          lightGreen: "#CEEAD6",
          lightGrey: "#F1F3F4",
          grey: "#9AA0A6",
          black: "#202124",
        },
      },
    },
  },
  darkMode: "media",
  plugins: [],
} satisfies Config;
