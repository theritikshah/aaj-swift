import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "#C2202B",
        lightRed: "#F8F2F2",
        gray: "#272727",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      fontWeight: {
        extralight: "200",
        light: "300",
        normal: "400", // Can also be called 'regular'
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C2202B", // Primary color
          "primary-focus": "#a71c24", // Darker shade for focus state (optional)

          accent: "#C2202B", // Accent color, same as primary
          "accent-focus": "#a71c24", // Optional darker shade for focus state

          neutral: "#272727", // Text color or neutral gray
          "base-100": "#F8F2F2", // Background color
          "base-200": "#e6e1e1", // Slightly darker background (optional)

          "base-content": "#272727", // Content text color
          black: "#000000", // Black color
          white: "#ffffff", // White color
        },
      },
      "light", // Optionally enable built-in themes
    ],
  },
};
export default config;
