const webpack = require('webpack');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        index: './src/main/index.tsx'
    },

    plugins: [
        new webpack.ProgressPlugin(),

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            title: "production",
            filename: "index.html",
            template: "./src/main/index.html"
        }),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[name].chunk.css"
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js?[contenthash]',
        chunkFilename: '[name].chunk.js',
        publicPath: '/',
    },
    optimization: {
        minimize: false,
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },
    module: {
        rules: [
            {
                // 拡張子 .tsと.tsxをts-loaderで解釈させる
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            sourceMap: true,
                            importLoaders: 2
                        }
                    },
                    // PostCSSのための設定
                    {
                        loader: "postcss-loader",
                        options: {
                            // PostCSS側でもソースマップを有効にする
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    // Autoprefixerを有効化
                                    // ベンダープレフィックスを自動付与する
                                    ["autoprefixer", { grid: true }],
                                ],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath : 'images/',
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.mjs', '.json', '.scss', '.css'],
    },
    target: ["web", "es5"]
}