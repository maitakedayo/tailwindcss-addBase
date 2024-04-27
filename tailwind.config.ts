import type { Config } from "tailwindcss";

const plugin  = require('tailwindcss/plugin');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'myLg': "var(--my-radius)", 
        'myMd': "calc(var(--my-radius) - 2px)",
        'mySm': "calc(var(--my-radius) - 4px)",
      },
      fontSize: {
        'myXs': 'calc(var(--my-size) * 1)',
        'mySm': 'calc(var(--my-size) * 2)',
        'myBase': 'calc(var(--my-size) * 3)',
        'myLg': 'calc(var(--my-size) * 4)',
        'myXl': 'calc(var(--my-size) * 5)',
        'my2xl': 'calc(var(--my-size) * 6)',
        'my3xl': 'calc(var(--my-size) * 7)',
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    plugin(({ addBase }: { addBase: (styles: Record<string, Record<string, string>>) => void }) => {
      addBase({
        ':root': {
          '--my-radius': '0.5rem',
          '--my-size': '.75rem',
        },
      })
    }),
  ],
};
export default config;