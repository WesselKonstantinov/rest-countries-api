import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "light-primary": "hsl(var(--color-bg-light) / 1)",
        "light-secondary": "hsl(var(--color-elem-light) / 1)",
        "dark-primary": "hsl(var(--color-bg-dark) / 1)",
        "dark-secondary": "hsl(var(--color-elem-dark) / 1)",
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
