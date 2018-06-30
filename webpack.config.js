module.exports = {
  entry: [
    __dirname + '/static/assets/javascripts/jquery.plugins.js',
    __dirname + '/static/assets/javascripts/jquery.ofi.min.js',
    __dirname + '/static/assets/javascripts/particles.js',
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/docs/assets/javascripts"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  externals: [
    {
      jquery: 'jQuery'
    }
  ]
};

