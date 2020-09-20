const packageJSON = require('./package');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const { version, name } = packageJSON;

module.exports = {
  output: {
    filename: `${name}.js`,
    path: path.resolve(__dirname, `dist/${name}/${version}/`),
  },
  module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
