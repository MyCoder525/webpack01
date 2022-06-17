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
}