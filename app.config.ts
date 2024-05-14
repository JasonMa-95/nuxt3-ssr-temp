export default defineAppConfig({
  theme: {
    primaryColor: "#ababab",
  },
});

/**
 * 可以在服务器渲染页面时和在浏览器中使用 useAppConfig 可组合访问 theme。
 * const appConfig = useAppConfig()
 */
