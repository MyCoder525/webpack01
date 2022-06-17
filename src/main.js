import { index } from './index.js'
import { list } from './list.js'


index()
list()

import "./styles/index.css"
import "./styles/index.less"


import gifSrc from './assets/1.jpg'
import pngSrc from './assets/logo.png'

const gif = document.createElement('img')
const png = document.createElement('img')

gif.src = gifSrc
png.src = pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)

import "./assets/fonts/iconfont.css"


const fn = () => {
    console.log("hallo");
}

fn()

// import App from './app.vue'


