// PS：utils只会自动导入顶层文件

// logInfo("process.env.NODE_ENV", process.env.NODE_ENV);
logInfo("import.meta.env", import.meta.env);
logInfo("BASE_URL", import.meta.env.VITE_API_URL);
logInfo("IMG_PREFIX", import.meta.env.VITE_IMG_PREFIX);
logInfo("FILE_PREFIX", import.meta.env.VITE_FILE_PREFIX);

// 变量
export const constants = {
  /** 本地调试 请求域名 */
  BASE_URL: import.meta.env.VITE_API_URL,
  // "http://10.10.13.1:8172",
  // process.env.NODE_ENV === "development" ? "http://10.10.13.1:8172" : "",
  /** 本地调试 相对路径（所有非tags组件资源前缀） */
  IMG_PREFIX: import.meta.env.VITE_IMG_PREFIX,
  // "http://192.168.10.140:9000",
  // process.env.NODE_ENV === "development" ? "http://192.168.10.140:9000" : "",
  /** 本地调试 相对路径（tags组件资源前缀） */
  FILE_PREFIX: import.meta.env.VITE_FILE_PREFIX,
  ANIMATE_NAME: {
    title: "wow animate__bounceIn",
  },
};

// 页面跳转
export const linkTo = (url) => {
  if (url) {
    window.location.href = url;
  }
};

// 获取当前浏览器的域名及端口  'http://192.168.10.140:5189'
export const getCurrentDomainAndPortWithPrefix = () => {
  // 获取当前网页的域名
  var origin = window.location.origin;
  return origin;
};

/**
 * 获取拓展字段名
 * @param {*} v  当前数据
 * @param {*} field 拓展字段名
 * @returns
 */
export const getExtendMapField = (v, field) => {
  if (v.extendMap && v.extendMap[field] && v.extendMap[field].length > 0) {
    return v.extendMap[field][0].extValue;
  }
  return "";
};

// 本地跑项目，判断是否为亚马逊url地址或后台配置的文件资源地址；如果不是，则用测试环境地址+相对路径
export const getImgUrl = (url, fromStr) => {
  if (!url) {
    return url;
  }
  const rpUrl =
    fromStr && fromStr === "tags" ? url : url.replace("/gvi-minio", ""); // 去掉代理路径(tags没有minio代理所以不需要去掉)

  let url2 = "";
  if (fromStr && fromStr === "tags") {
    url2 = constants.FILE_PREFIX ? constants.FILE_PREFIX + rpUrl : url; // 如果FILE_PREFIX存在，才拼接（测试环境或者线上环境不需要处理）
  } else {
    url2 = constants.IMG_PREFIX ? constants.IMG_PREFIX + rpUrl : url; // 如果IMG_PREFIX存在，才拼接（测试环境或者线上环境不需要处理）
  }
  return url.includes("https://data-file") ||
    url.includes("https://") ||
    url.includes("http://")
    ? url
    : url2;
};

// 将moduleList对象形式转换为数组形式，便于动态渲染组件
export function transformDataToArrays(data) {
  const result = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      if (Array.isArray(value) && value.length > 0) {
        result.push({ moduleName: key, moduleData: value });
      }
    }
  }
  return result;
}

// 将moduleList对象形式转换为数组形式，并且根据sort字段排序，便于动态渲染组件
export function transformAndSortData(data) {
  // 将数据转换为数组形式
  const transformedArray = Object.keys(data).map((moduleName) => ({
    moduleName,
    moduleData: data[moduleName],
  }));

  // 根据每个模块的第一条数据的 sort 字段进行排序
  transformedArray.sort((a, b) => {
    const sortA = a.moduleData[0]?.sort || 0; // 如果没有 sort 字段，则默认为 0
    const sortB = b.moduleData[0]?.sort || 0;
    return sortA - sortB;
  });

  return transformedArray;
}


/**
 * 自定义console.log方法
 * @param {*} logName log名称
 * @param {*} logData log值
 *    logInfo('入参', {a: 1, b: 2});
 */
export function logInfo(logName, logData) {
  // 获取当前的日期和时间，格式化为 [年月日 时分秒]
  const now = new Date();
  const formattedTime = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")} ${now
    .getHours()
    .toString()
    .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  // 在控制台打印格式化的日志信息
  console.log(`[${formattedTime}] ${logName} =>`, logData);
}