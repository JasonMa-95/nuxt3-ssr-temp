// 采用pm2部署（注意脚本启动文件的script文件路径）
module.exports = {
  apps: [
    {
      name: "nuxt3-ssr-temp",
      exec_mode: "cluster",
      instances: "1", // Or a number of instances
      script: "./.output/server/index.mjs",
      args: "start",
      port:'8888'
    },
  ],
};
