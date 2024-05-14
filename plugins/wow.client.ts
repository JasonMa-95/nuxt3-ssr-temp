// 在plugins文件下创建wow.client.ts，因为wow.js中有windows的使用，所以要加client，让nuxt在客户端渲染的时候才加载。
// plugins/wow.client.ts
import { defineNuxtPlugin } from '#app'
import 'animate.css'
import WOW from 'wow.js'

export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client) {
    // var WOW = require('wow.js')
    new WOW().init()
  }
})
// https://blog.csdn.net/weixin_43160498/article/details/127090215