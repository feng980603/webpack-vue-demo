const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackpPlugin = require('copy-webpack-plugin');

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

    module:{
        //定义加载器的规则
        rules:[
            {
                test:/\.css$/,//找到匹配的文件模块
                //这里加载器的顺序要倒着写
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },

    //插件
    plugins:[
        new HtmlWebpackPlugin({
            title:'丰丰的首页',
            template:'./index.html',
        }),

        //copy
        new CopyWebpackpPlugin([
            {
                from:'./lib/jquery.min.js',
                to:'lib'
            }
        ])
    ],

    //解析
    resolve:{
        //别名
        alias:{
            vue:'vue/dist/vue.esm.js'
        }
    },

    //webpack-dev-server 的配置
    devServer:{
        //配置以哪个文件夹作为web服务的根路径
        contentBase:path.resolve(__dirname,'./dist')
    }
}