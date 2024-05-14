// PS：只会自动导入顶层文件; 可访问插件注入; 可以使用其它可组合项;

/** 命名导出 */
export function useFoo() {
  return useState("foo", () => "bar");
}

// /**
//  * 默认导出（根据文件名）
//  * 它将作为 useFoo() 提供(不带扩展名的文件名的驼峰式大小写)
//  */
// export default function () {
//   return useState("foo", () => "bar");
// }
