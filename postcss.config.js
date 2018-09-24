module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-bem-linter'),
    require('postcss-animation'),
    require('postcss-color-function'),
    require('postcss-css-reset'),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-pixels-to-rem'),
    require('postcss-calc'),
    require('postcss-utilities'),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({ browsers: ['> 1%', 'last 2 versions', 'Opera >=10.1', 'Firefox >= 4', 'iOS >=3.2'] }),
    require('postcss-instagram'),
    require('cssnano')
  ]
});
