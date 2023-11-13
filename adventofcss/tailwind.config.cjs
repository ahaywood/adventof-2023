/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    backgroundImage: {
      'borderTop': "url('/images/border--top@2x.png')",
      'borderZigZag': "url('/images/border__zigzag.png')",
      'button': "url('/images/button.png')",
      'diamond': "url('/images/diamond.png')",
      'fatBorder': "url('/images/fat-border.png')",
      'horizontalDivider': "url('/images/horizontal-divider.png')",
      'reindeerLeft': "url('/images/reindeer--black--left.png')",
      'reindeerRight': "url('/images/reindeer--black--right.png')",
      'snowflakes': "url('/images/snowflakes.png')",
      'verticalDivider': "url('/images/vertical-divider.png')",
      "xes": "url('/images/xes.png')",
      'zigZag': "url('/images/zig-zag.png')",
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: '#2C6031',
      transparent: 'transparent'
    },
    extend: {
      backgroundPosition: {
        centerTop: 'center top',
        center: 'center center',
        leftBtm: 'left bottom',
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
