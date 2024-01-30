import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "light-primary": "hsl(var(--color-bg-light) / 1)",
        "light-secondary": "hsl(var(--color-elem-light) / 1)",
        "dark-primary": "hsl(var(--color-bg-dark) / 1)",
        "dark-secondary": "hsl(var(--color-elem-dark) / 1)",
      },
      gap: {
        "18": "4.625rem",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, min(16.5rem, 100%))",
        "fluid-links": "repeat(auto-fill, minmax(6rem, 1fr))",
      },
      lineHeight: {
        tight: "1.1",
      },
      textColor: {
        "light-primary": "hsl(var(--color-text-light) / 1)",
        "light-secondary": "hsl(var(--color-input-light) / 1)",
        dark: "hsl(var(--color-text-dark) / 1)",
      },
    },
  },
  plugins: [],
};
export default config;
