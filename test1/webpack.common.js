const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        plugins: [require('autoprefixer')]
    }
};

module.exports = {
    // entry: {
    //     bundle: __dirname + '/app/main.js',
    //     second: __dirname + '/app/sec.js'
    // },
    // output: {
    //     filename: "[name].js",
    //     // filename: "bundle.js",
    //     path: __dirname + '/public'
    // },
    entry: __dirname + '/app/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, '/public')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', postcssLoader]
            },
            {
                test: /\.(sass|scss)$/,
                // use: ['style-loader', 'css-loader',postcssLoader, 'sass-loader'] // 需要用到的loader，一定是这个顺序， 因为调用loader的顺序是从右向左编译的
                use: ExtractTextPlugin.extract({ // 这里我们需要调用分离插件内的extract方法
                    fallback: 'style-loader', // 相当于回滚，经postcss-loader和css-loader处理过的css最终再经过style-loader处理
                    use: ['css-loader', postcssLoader, 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {    // options：为loaders提供额外的设置选项（可选）
                        presets: ["es2015"]
                    }
                },
                exclude: /node_modules/ //exclude 排除匹配node_modules模块 include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'), // new 一个插件的实例
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'app/index.template.html')
        }),
        new ExtractTextPlugin('css/bundle.css'),
        new webpack.HotModuleReplacementPlugin() //热更新插件
    ]
};