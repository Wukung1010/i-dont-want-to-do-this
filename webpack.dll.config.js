const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: ['react', 'react-dom'],
    output: {
        path: path.join(__dirname, '/dist/static'),
        filename: 'dll.[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '[name]-maniest.json'),
            name: '[name]'
        })
    ]
}