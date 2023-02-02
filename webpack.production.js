const {merge} = require('webpack-merge');
const webpack = require("webpack");
const common = require('./webpack.config.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin({})
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'BACKEND_API_URL': JSON.stringify(''),
            'AWS_REGION': JSON.stringify('ap-northeast-1'),
        })
    ]
});
