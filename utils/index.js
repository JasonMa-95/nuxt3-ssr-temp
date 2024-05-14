// PS：只会自动导入顶层文件

const imgPrefix = constants.IMG_PREFIX;
console.log("imgPrefix =>", imgPrefix);

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
  if (!url || !imgPrefix) {
    return url;
  }
  const rpUrl =
    fromStr && fromStr === "tags" ? url : url.replace("/gvi-minio", ""); // 去掉代理路径(tags没有minio代理所以不需要去掉)
  const url2 = imgPrefix ? imgPrefix + rpUrl : url; // 如果imgPrefix存在，才拼接（测试环境或者线上环境不需要处理）
  // console.log("url2", url2);
  return url.includes("https://data-file") ||
    url.includes("https://") ||
    url.includes("http://")
    ? url
    : url2;
};

// 将moduleList对象形式转换为，数组形式，便于动态渲染组件
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
