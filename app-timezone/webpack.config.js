const packageJSON = require('./package');
const path = require('path');

const { version, name } = packageJSON;

module.exports = {
  output: {
    filename: `${name}.js`,
    path: path.resolve(__dirname, `dist/${name}/${version}/`),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
