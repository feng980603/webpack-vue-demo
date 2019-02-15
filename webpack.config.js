const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//需要暴露一个对象
module.exports = {
    //模式
    mode:'production',

    //入口
    entry:'./src/index.js',

    //出口
    output:{
        //出口的位置(绝对路径)
        path:path.resolve(__dirname,'./dist'),    
        filename:'bundle.js',
    },

    //插件
    plugins:[
        new HtmlWebpackPlugin({
            title:'丰丰的首页',
            template:'./index.html',
        })
    ]
}