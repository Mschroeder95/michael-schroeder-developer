import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      'tertiary': {
        DEFAULT: '#FFFFFF'
      },
      'primary': {
        DEFAULT: '#111729'
      },
      'secondary': {
        DEFAULT: '#11fde9'
      }
    }
  },
  plugins: [],
}
export default config
