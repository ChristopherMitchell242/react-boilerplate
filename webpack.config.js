const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        /* Exclude fonts while working with images, e.g. .svg can be both image or font. */
        exclude: path.resolve(__dirname, '../src/resources'),
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
            // outputPath: 'images/'
          }
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    // new CopyPlugin([
    //   { from: 'resources', to: '.' }
    // ]),
  ]
};
