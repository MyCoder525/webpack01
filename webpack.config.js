const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: join(__dirname, "lib"),
        filename: "webpack-main.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, "public/index.html")
        })
    ],
    devServer: {
        open: true,
        port: 999
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less/i,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                //默认8kb
                type: 'asset',
                generator: {
                    filename: 'Images/[hash:6][ext]'
                }
            },
        ]
    }
}