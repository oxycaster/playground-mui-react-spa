const {merge} = require('webpack-merge');
const webpack = require("webpack");
const common = require('./webpack.config.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',

    devServer: {
        open: true,
        https: true,
        host: '0.0.0.0',
        static: {
            directory: path.join(__dirname, "dist"),
        },
        historyApiFallback: true,
        client: {
            overlay: {
                errors: true,
                warnings: false
            }
        }

    },

    plugins: [
        new webpack.DefinePlugin({
            'BACKEND_API_URL': JSON.stringify('http://localhost:9000'),
            'AWS_REGION': JSON.stringify('ap-northeast-1'),
        })
    ]
});
