const mix = require('laravel-mix');

mix.js('src/js/main.js', 'dist/static/js')
   .postCss('src/css/main.css', 'dist/static/css', [
  require('tailwindcss'),
])
   .setPublicPath('dist');
