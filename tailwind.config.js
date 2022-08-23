module.exports = {
  // content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  // theme: {
  //   extend: {},
    
  // },
  // plugins: [],
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
plugins: [
require('tw-elements/dist/plugin')
]
}
