// https://nuxt.com/docs/api/configuration/nuxt-config
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

// console.log('process.env', process.env)
// console.log('process.env.NUXT_API_URL', process.env.NUXT_API_URL)

export default defineNuxtConfig({
  ssr: true, // 服务端渲染模式
  devtools: { enabled: true },
  // runtimeConfig: {
  //   // 这个属性只能在服务端获取到
  //   apiSecret: "123456",
  //   // public对象中的属性，服务端和客户端都能获取到
  //   public: {
  //     NUXT_API_URL: process.env.NUXT_API_URL,
  //   },
  // },
  // 注册插件 https://nuxt.com.cn/docs/guide/directory-structure/plugins
  plugins: [
    // '~/plugins/bar/foz'
  ],
  modules: [
    "@ant-design-vue/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "dayjs-nuxt",
    "nuxt-lodash",
    // "@nuxtjs/i18n",// 多语言模块会影响 @nuxtjs/sitemap 模块的生成，暂时没找到方案
    "@nuxtjs/sitemap", // 生成sitemap
    "@nuxt/image", // 图片懒加载
    "nuxt3-leaflet", // 让nuxt3能支持leaflet地图
  ],
  image: {
    dir: "./assets",
    quality: 60,
  },
  // nitro: {
  //   // https://ezdoc.cn/docs/nitro/config#prerender 预加载处理（会影响打包）
  //   prerender: {
  //     crawlLinks: false,
  //     routes: ["/", "sitemap.xml"],
  //     ignore: ["/404"],
  //   },
  // },
  /** sitemap 谷歌站点地图功能 */
  site: {
    url: process.env.VITE_SITEMAP_URL, // process.env.VITE_SITEMAP_URL   'https://www.greenvalleyintl.com'
  },
  sitemap: {
    sources: ["/api/sitemap"],
  },
  // i18n: {
  //   vueI18n: "./i18n.config.ts", // if you are using custom path, default
  // },
  css: [
    "~/assets/styles/base.less",
    "~/assets/styles/main.less",
    "~/assets/styles/antd.min.css", // 引入antd的css文件
  ],
  vite: {
    // 处理wow.js
    plugins: [viteCommonjs()],
    // 配置预处理器
    css: {
      preprocessorOptions: {
        less: {
          additionalData:
            '@import "@/assets/styles/base.less"; @import "@/assets/styles/main.less";',
        },
      },
    },
  },
  // 软件配置（兜底）
  app: {
    head: {
      title: "我是SEO标题",
      meta: [
        {
          name: "keyword",
          content: "我是SEO关键字",
        },
        {
          name: "description",
          content: "我是SEO描述",
        },
      ],
      // 自定义浏览器标签logo
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
      script:
        process.env.VITE_VCONSOLE !== undefined
          ? [
              {
                src: "https://cdn.bootcdn.net/ajax/libs/vConsole/3.15.1/vconsole.min.js",
                type: "text/javascript",
              },
              {
                innerHTML: `new VConsole();`,
              },
            ]
          : [],
    },
    // server: {
    //   port: 8888,
    //   host: "0.0.0.0",
    // },
  },
  // 通过ip访问
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
});
