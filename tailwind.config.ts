import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
				fade: 'fadeIn 1s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					from: { 
            opacity: "0" 
          },
					to: { 
            opacity: "1" 
          },
				},
			},
    },
  },
  plugins: [
    plugin(function({ addVariant }:any) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }),
    plugin(function({ matchUtilities, theme }:any) {
      matchUtilities(
        {
          'animation-delay': (value:any) => ({
            'animation-delay': value,
          }),
        }
      )
    })
  ],
};
export default config;
