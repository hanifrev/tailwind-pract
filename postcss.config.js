const purgeCSS = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    purgeCSS({
      content: ['./src/**/*.js'],
      css: ['./src/**/*.css']
    })
  ]
}
