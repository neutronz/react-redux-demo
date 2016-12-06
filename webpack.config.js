const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const __DEV__  = process.env.NODE_ENV !== 'production'

module.exports = {
    devtool: __DEV__ ? 'eval-source-map' : 'cheap-source-map',
    entry: ['./index'],
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '../css/app.css',
            disable: false,
            allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEV__
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: [
                        ['es2015', { 'modules': false }],
                        'stage-0',
                        'react'
                    ],
                    plugins: [
                        ['transform-runtime', {
                            'polyfill': false,
                            'regenerator': true
                        }],
                        'transform-object-rest-spread'
                    ]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    }
}
