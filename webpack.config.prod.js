const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const INPUT_PATH = path.resolve(__dirname, 'src');
const OUTPUT_PATH = path.resolve(__dirname, 'public');

module.exports = {
   mode: 'production',
   entry: `${INPUT_PATH}/index.js`,
   output: {
      path: OUTPUT_PATH,
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
         },
         {
            test: /\.(s*)css$/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: ['css-loader', 'sass-loader']
            })
         },
         {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: {
               loader: 'url-loader',
               options: {
                  limit: 10000,
                  name: 'static/media/[name].[hash:8].[ext]'
               }
            }
         }
      ]
   },
   plugins: [
      new CleanWebpackPlugin([`${OUTPUT_PATH}/static`]),
      new ExtractTextPlugin({
         filename: 'bundle.css'
      }),
      new HtmlWebPackPlugin({
         template: `./public/index.html`,
         favicon: './public/favicon.ico',
         filename: 'index.html'
      })
   ]
};
