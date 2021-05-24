const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
   entry: {
       app: './index.js',
   },
   context: path.resolve(__dirname, "src"),
   output: {
       path: path.resolve(__dirname, "static", "build"),
       filename: 'app.js',
   },
   devtool: 'eval',
   module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                //include: path.resolve(__dirname, "src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', '@babel/react'],
                }
            },
            {
                test   : /\.(jpg|png|gif)$/,
                loader : 'url-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html', 
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './static/build'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }  
    },


};