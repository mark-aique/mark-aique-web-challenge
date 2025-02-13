import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2D68F8",
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
        },
      },

    },
  },
  plugins: [],
} satisfies Config;
