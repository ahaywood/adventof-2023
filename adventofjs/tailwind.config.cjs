/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    backgroundImage: {
      'borderTop': "url('/images/border--top@2x.png')",
      'borderZigZag': "url('/images/border__zigzag.png')",
      'button': "url('/images/button.png')",
      'fatBorder': "url('/images/fat-border.png')",
      'snowflakes': "url('/images/snowflakes.png')",
      'verticalDivider': "url('/images/vertical-divider.png')",
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: '#92000e'
    },
    extend: {
      backgroundPosition: {
        centerTop: 'center top',
        center: 'center center',
        rightTop: 'right top',
      }
    },
    fontFamily: {
      decorative: ['Sweater-Decorative'],
      mono: ['Roboto Mono', 'monospace'],
      slabSerif: ['Sweater-SlabSerif'],
      script: ['Sweater-Script']
    }
  },
  plugins: [],
}
