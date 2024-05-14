// const config = useRuntimeConfig(); // 只能在vue文件内使用
// console.log("config", config);

// const dayjs = useDayjs();
// console.log("dayjs", dayjs("2022-8-18").format("YYYY-MM-DD HH:mm:ss"));

export default {
  /** 请求域名 */
  BASE_URL: "http://10.10.13.1:8172",
  // process.env.NODE_ENV ==='development' ? "http://10.10.13.1:8172" : '',
  /** 本地调试 相对路径图片的前缀 */
  IMG_PREFIX: "http://192.168.10.140:9000",
  // process.env.NODE_ENV ==='development' ? "http://192.168.10.140:9000" : '',
  /** 当前环境 */
  CURRENT_ENV: "",
  /** 超时时间 */
  TIMEOUT: 6000,
  ANIMATE_NAME: {
    title: "wow animate__bounceIn",
  },
};
