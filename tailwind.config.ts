import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '430px',   // 0.25 mobile
      md: '720px',   // 0.5  tablet
      lg: '1080px',  // 0.75 desktop
      xl: '1440px',  // 1    large desktop
    },
    fontFamily: {
      primary: ['Azonix', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        primary: "url('/main-background.png')",
        dotLineGradient: "url('/dot-gradient.png')",
        buttonGradient: 'var(--button-gradient)',
      },
    },
  },
  plugins: [],
};
export default config;
