const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
       module: {
     rules: [
      { 
        
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: true,
        },
        
    },
    
    ]
   },
    devServer: {
        static: './dist',
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
    optimization: {
        runtimeChunk: 'single',
      },
    
};