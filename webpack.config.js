const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        filename: "bundle.js",
        path: __dirname + '/public'
    },
    mode: 'development', //
    devServer: {//启动服务配置
        contentBase: './public',
        port: 3004,
        host: '192.168.0.137',
        inline: true, // 文件修改后刷新
        historyApiFallback: true // 不跳转（如果找不到界面就返回默认首页）
    },
    devtool: "source-map", //会生成对于调试的完整的.map文件，但同时也会减慢打包速度
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
        new CleanWebpackPlugin() //索要清理的文件夹名称
    ]
};