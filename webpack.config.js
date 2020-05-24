const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports =  {
    entry: ['@babel/polyfill','./src/index.js','./src/css/main.scss'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        port: 9000,
        compress: true,
        open: true
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",  
              MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        },
          
          {
            test: /\.(jpe?g|png|gif|svg|ico)$/i,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: '/images'
                    }
                }
            ]
        }
           
    
        ]
    },
    plugins: [
        //new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
         }),
         new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
         })
    ]
}