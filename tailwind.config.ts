import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#1F5AF4",
          2: "#276DF71A",
        },
        gray: {
          0: "#F9F9F9",
          1: "#808080",
          2: "#2A2A2AB2",
          3: "#26262699",
          4: "#CFCFCF",
          5: "#424242",
        },
        green: {
          1: "#01A85A",
        },
        orange: {
          1: "#FF7A00",
        },
        red: {
          1: "#F42C1F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
