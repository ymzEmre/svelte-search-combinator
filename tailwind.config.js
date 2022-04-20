module.exports = {
  content: ['./public/index.html', './src/**/*.svelte', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
};
