module.exports = {
  mode: 'development',
  entry: [
    __dirname + '/static/assets/javascripts/portfolio.js',
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/static/assets/javascripts"
  },
  devtool: 'inline-source-map',
  performance: { hints: false }
};

