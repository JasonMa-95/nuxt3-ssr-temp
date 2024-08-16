export default defineSitemapEventHandler(async (e) => {
  console.log("/server/api/sitemap.js 被运行");

  // 预设写死的站点地图数据
  var routes = [
    {
      url: `/`,
      changefreq: "daily",
      lastmod: new Date(),
      priority: 1,
    },
    {
      url: `/test`,
      changefred: "daily",
      lastmod: new Date(),
      priority: 0.1,
    },
    {
      url: `/test222`,
      changefred: "daily",
      lastmod: new Date(),
      priority: 0.2,
    },
  ];
  // console.log("import.meta.env.VITE_API_URL", import.meta.env.VITE_API_URL);
  // 通过请求获取后台动态返回的站点地图数据
  // await fetch(
  //   "http://10.10.13.1:8172" + "/gvi/web/us/subject/getActiveSubject",
  //   {
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("sitemap - Success:", data.data);
  //     let proList = data.data[0].children;
  //     console.log("sitemap - proList:", proList);
  //     var siteArray = []; // 动态地址集合
  //     let siteObject = {};
  //     proList.forEach((v) => {
  //       siteObject = {
  //         url: v.url,
  //         changefred: "daily",
  //         lastmod: new Date(),
  //         priority: 0.7,
  //       };
  //       siteArray.push(siteObject);
  //     });
  //     routes = [...routes, ...siteArray];
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  return routes;
});

// const posts = await Promise.all([
//   {
//     _path: "/blog/post-a",
//     modifiedAt: new Date(),
//   },
//   {
//     _path: "/blog/post-b",
//     modifiedAt: new Date(),
//   },
//   {
//     _path: "/blog/post-c",
//     modifiedAt: new Date(),
//   },
// ]);
