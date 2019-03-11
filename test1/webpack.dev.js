const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, {
    mode: 'development', //
    devServer: {//启动服务配置
        contentBase: './public',
        port: 3004,
        host: '192.168.0.137',
        inline: true, // 文件修改后刷新
        hot: true, // 热更新
        historyApiFallback: true // 不跳转（如果找不到界面就返回默认首页）
    },
    devtool: "source-map", //会生成对于调试的完整的.map文件，但同时也会减慢打包速度
});