module.exports = {
  content: ['./public/index.html', './src/**/*.svelte', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [require('tw-elements/dist/plugin')],
};
