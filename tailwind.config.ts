import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        header: '#000000',
        heroTitle: '#000000',
        heroSubtitle: '#000000',
      },
      backgroundImage: {
        homepage: "url('/images/root-layout/root-layout-bg-img.png')",
      },
    },
  },
  plugins: [],
}
export default config
