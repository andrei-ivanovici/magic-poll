const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");``
const path = require('path');

var ROOT = path.resolve(__dirname, '..');

function resolveRelativePath(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}

module.exports = {
    resolve: {
        /*
         * An array of extensions that should be used to resolve modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
         */
        extensions: ['', '.ts', '.js', '.json','scss'],

        // An array of directory names to be resolved to the current directory
        modules: [resolveRelativePath('src'), 'node_modules'],

    },
    entry: {
        'vendor': './src/vendor.ts',
        'main': './src/main.ts'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader?rewriteImports=true', 'angular2-template-loader'],
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [resolveRelativePath('src/index.html')]
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract("style-loader", 'css-loader!sass-loader')
            },
        ]
    },

    output: {
        path: resolveRelativePath('dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        devtool: 'source-map',
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }),
    new ExtractTextPlugin('styles.css')
    ],
    devServer: {
        port: 5000,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: resolveRelativePath('dist')
    },
}