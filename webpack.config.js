var webpack = require('webpack');

var Promise = require('es6-promise').Promise;

if (!global.Promise)
    global.Promise = Promise;

module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/src',
        filename: '/bundle.js'
    },
    // watch: true,
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
            },
            { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
            { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel",
                query:
                {
                    presets:['es2015', 'react', "stage-1"]
                }
            }
        ]
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    devServer: {
        host: 'localhost',
        port: 3030,
        contentBase: __dirname + '/src'
    }
}