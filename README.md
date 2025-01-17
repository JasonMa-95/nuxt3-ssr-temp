# nuxt3-ssr-temp
> An SSR website using Nuxt3, vue3, Pinia, less,swiper ,ant-design-vue ,vueuse ,lodash ,dayjs ,qs ,i18n ,sitemap , wow.js + animate.css and leaflet. You can use it as a template to build your own website.…

> 这是一个基于官方脚手架生成的nuxt3 ssr项目
> 已集成各类主流vue3生态相关工具或库，具体如下：
- **nuxt3** vue官方推荐的最好用，生态最全的nuxt3服务端渲染ssr框架
- **vue3** 推荐使用script setup语法糖
- **vue-router** 路由
- **less** css预处理器
- **wow.js + animate.css** 动画效果
- **swiper** 公认最好用的轮播插件                  
- **ant-design-vue** 基于vue3的UI组件库
- **pinia+数据持久化**  传说中的vuex5
- **vueuse** Vue3组合式API的工具集
- **lodash** ...
- **dayjs** ...
- **qs** ...
- **i18n** 多语言国际化
- **vconsole** 移动端调试工具（本地/测试环境）
- **sitemap** seo优化、生成站点地图 【启动项目后，通过/sitemap.xml能看到站点页面信息，就代表成功了】
- **image** 图片懒加载
- **leaflet** leaftlet地图组件
...

## 前提
- 请先按照官方要求，安装node 18.0.0+

## pm2启动/预览
- 先保证已创建 `ecosystem.config.js` 
- 然后执行 `pm2 start ecosystem.config.js`
- 通过 http://localhost:8888 可以看到项目预览（也就是打包后部署到服务器的项目）


## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```