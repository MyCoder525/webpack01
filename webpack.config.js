const { join } = require('path')

module.exports = {
    entry: "./src/main.js",
    output: {
        path: join(__dirname, "lib"),
        filename: "webpack-main.js",
        clean: true
    }
}