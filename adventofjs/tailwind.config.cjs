/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: '#92000e'
    },
    extend: {},
    fontFamily: {
      decorative: ['Sweater-Decorative'],
      mono: ['Roboto Mono', 'monospace'],
      slabSerif: ['Sweater-SlabSerif'],
      script: ['Sweater-Script']
    }
  },
  plugins: [],
}
