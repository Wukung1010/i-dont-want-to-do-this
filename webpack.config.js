const webpack = require('webpack')
const path = require('path')
const manifest = require('./main-maniest.json')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'app.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest
        })
    ]
}