const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#source-map',
    entry: './src/main.ts',
    output: {
        path: '/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true,
                    loaders: {
                        scss: ExtractTextPlugin.extract({
                            use: ['css-loader', 'sass-loader'],
                            fallback: 'style-loader'
                        }),
                    }
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'node_modules/monaco-editor/min/vs', to: 'vs', }
        ]),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}