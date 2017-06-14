const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'js/bundle.[hash].js'
  },
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
  })],
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
