const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: './src/js/main.js',
    plugins:[
                new HtmlWebpackPlugin({
                    template:"./src/js/template/main.html",
                    inject:false,
                    filename:path.resolve(__dirname, 'dist/templates/layouts/user.html')
                }),
                ],
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}
