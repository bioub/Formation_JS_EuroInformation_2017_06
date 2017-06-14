module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'dist/js/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["env", {
                "targets": {
                  "browsers": ["> 1%"]
                }
              }]
            ]
          }
        }
      }
    ]
  }
}
