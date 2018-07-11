module.exports = {
  mode: 'development',
  entry: [
    __dirname + '/static/assets/javascripts/portfolio.js',
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/static/assets/javascripts"
  }
};

