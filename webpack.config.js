/*
 * @Author: Lizh
 * @Date:   2018-05-20 23:06:56
 * @Last Modified by:   Lizh
 * @Last Modified time: 2018-05-29 10:22:50
 */
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
// 环境变量, dev, (test), online
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
// webpack config
const config = {
    entry: './src/app.jsx',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: WEBPACK_ENV === 'online' ? '//s.happymmall.com/admin-fe-v2/dist/' : 'http://localhost:8086/dist/',
        // publicPath  : '/dist/',
        filename: 'js/app.js'
    },
    externals: {
        'jquery': 'window.jQuery'
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'style-loader'
            })
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                use: 'css-loader!sass-loader',
                fallback: 'style-loader'
            })
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: 'resource/[name].[ext]',
                    limit: 2000
                }
            }]
        }, {
            test: /\.jsx$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            }
        }]
    },
    resolve: {
        alias: {
            node_modules: path.join(__dirname, '/node_modules'),
            util: path.join(__dirname, '/src/util'),
            component: path.join(__dirname, '/src/component'),
            service: path.join(__dirname, '/src/service'),
            page: path.join(__dirname, '/src/page')
        }
    },
    devServer: {
        port: '8086', //设置端口号
        // 路径的配置
        historyApiFallback: {
            index: '/dist/index.html'
        },
        proxy: {
            '/manage': {
                target: 'http://admintest.happymmall.com',
                changeOrigin: true
            },
            '/user/logout.do': {
                target: 'http://admintest.happymmall.com',
                changeOrigin: true
            }
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            favicon: './favicon.ico'
        }),
        new ExtractTextPlugin("css/[name].css"),
    ]
};

module.exports = config;