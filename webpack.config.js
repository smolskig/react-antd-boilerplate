const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

const esLintOptions = {
  context: "./src",
};

module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
    client: {
      logging: "error",
    },
  },
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
          },
          {
            loader: "style-resources-loader",
            options: {
              patterns: [
                path.resolve(__dirname, "src/theme/theme.config.less"),
                path.resolve(__dirname, "src/theme/global.less"),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin, new ESLintPlugin(esLintOptions)],
};
