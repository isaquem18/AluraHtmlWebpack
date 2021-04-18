const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index/index.jsx',
        sobre: './src/sobre/sobre.jsx',
        contato: './src/contato/contato.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].js',
        //chunkFilename: '[id].bundle_[chunkhash].js',
        //sourceMapFilename: '[file].map'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg)$/,
                exclude: /node_modules/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index', 'index.html'),
            //chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'sobre.html',
            template: path.resolve(__dirname, 'src', 'sobre', 'sobre.html'),
            //chunks: ['sobre'],
        }),
        new HtmlWebpackPlugin({
            filename: 'contato.html',
            template: path.resolve(__dirname, 'src', 'contato', 'contato.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ]
}