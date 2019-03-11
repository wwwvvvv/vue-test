const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        filename: "bundle.js",
        path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'] // 需要用到的loader，一定是这个顺序， 因为调用loader的顺序是从右向左编译的
            },
            {
                test: /\.js$/,
                // use: 'babel-loader',
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
        new webpack.HotModuleReplacementPlugin() //热更新插件
    ]
};