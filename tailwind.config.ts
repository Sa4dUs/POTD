import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image_1' : "url('/public/background.png')"
      },
      fontFamily: {
        sans: ['var(--font-pokemon)']
      }
    },
  },
  plugins: [],
}
export default config
