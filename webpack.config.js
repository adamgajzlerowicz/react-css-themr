const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constants
const APP = path.join(__dirname, 'app');
const BUILD = path.join(__dirname, 'build');
const TEMPLATE = path.join(__dirname, 'app/templates/index_default.html');
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8081;

module.exports = {
    entry: {
        app: APP
    },
    output: {
        path: BUILD,
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
            }
        ]
    },

    devtool: 'eval-source-map',
    // webpack-dev-server configuration
    devServer: {
        historyApiFallback: true,
        // hot: true,
        inline: true,
        progress: true,

        stats: 'errors-only',

        host: HOST,
        port: PORT,

        outputPath: BUILD
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', { allChunks: true }),
        new HtmlWebpackPlugin({
            template: TEMPLATE,
            // JS placed at the bottom of the body element
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ]
};