/**
 * 权限 + 用户信息
 */
import { reactive } from "vue";
// 这里不能使用的异步，否则没法正常获取状态值，导致鉴权失效
export const useAuthStore = defineStore(
  "gvi-mall-auth",
  () => {
    let state = reactive({
      pages: ["/cart"], // 需要鉴权的页面(必须登录）
      userInfo: { username: "xxx", avatar: "xxxx" }, // 用户信息
    });

    // const getData = async () => {
    //   const res = await useFetch(
    //     constants.SENDMESSAGE_URL + api.getConfig + "home",
    //     {
    //       method: "post",
    //     }
    //   );
    //   console.log("res store内", res);
    // };

    return {
      state,
      // getData,
    };
  },
  {
    persist: true, // 开启持久化
  }
);
