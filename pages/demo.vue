<template>
  <div>
    <NuxtLink to="/">去首页</NuxtLink>
    <br />
    <NuxtLink to="/leaflet">去Leaflet demo页</NuxtLink>

    <h1 style="font-size: 20px; padding: 20px; font-weight: bold">
      已集成各种开箱即用的工具、类库，使用示例如下：
    </h1>

    <h2 v-focus>plugins/directives： v-focus</h2>

    <h2>pinia示例: {{ user.userName }} ------- {{ user.age }}</h2>

    <h2>vueuse示例: x: {{ x }} ------- y: {{ y }}</h2>

    <div ref="el" :style="style" style="position: fixed; background: aqua">
      拖动! 我目前的位置： {{ x2 }}, {{ y2 }}
    </div>

    <h2>dayjs示例: {{ $dayjs("2024-10-18").format("YYYY-MM-DD HH:mm:ss") }}</h2>

    <h2>
      lodash示例: 使用useToUpper('foo-bar') => {{ useToUpper("foo-bar") }}
    </h2>

    <h2>qs示例: 使用qs.parse('a=c') => {{ qs.parse("a=c") }}</h2>

    <!-- <h2>
      国际化示例:
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('cn')">cn/中文</button>
      {{ $t("welcome") }}------{{ $t("name") }}
    </h2> -->

    <h2>
      <p>useCookie组合函数: {{ counter || "-" }}</p>
      <button @click="counter = null">重置</button>
      <button @click="counter--">减少-</button>
      <button @click="counter++">增加+</button>
    </h2>

    <h2>
      useState组合函数:
      <pre>{{ foo }}</pre>
    </h2>

    <h2>
      图片懒加载：(从网络里面就可以看出，滚动到一定位置之后，才懒加载的图片)
      <br />
      <NuxtImg
        style="border: 1px solid aqua; width: 500px"
        class="imgbg"
        src="https://data-file-platform.s3.ap-southeast-1.amazonaws.com/gvi-us-2024-08-16MTcyMzgwMDIyNTA2Nw%3D%3D.jpg"
        loading="lazy"
        quality="50"
      />
    </h2>
  </div>
</template>

<script setup>
// import { useDayjs } from "#dayjs";
import qs from "qs";

// // i18n国际化
// const { locale, setLocale } = useI18n();

// pinia
import { useUserStore } from "@/stores/useUserStore";
const user = useUserStore().userInfo;

// vueuse
const { x, y } = useMouse();
const el = ref(null);
// `style` will be a helper computed for `left: ?px; top: ?px;`
const {
  x: x2,
  y: y2,
  style,
} = useDraggable(el, {
  initialValue: { x: 700, y: 400 },
}); // 拖拽
console.log("style", style);

// dayjs
const dayjs = useDayjs();
console.log("dayjs =>", dayjs("2023-5-15").format("YYYY-MM-DD HH:mm:ss"));

// lodash
console.log("lodash - useStartsWith =>", useStartsWith("abc", "a")); // _.startsWith('abc', 'a'); // => true
console.log("lodash - useToUpper =>", useToUpper("foo-bar")); // _.toUpper('foo-bar'); // => 'FOO-BAR'

// qs
console.log("qs.parse('a=c') =>", qs.parse("a=c")); // {a:'c'}

// 读取app.config.js中的配置
const appConfig = useAppConfig();
console.log("appConfig =>", appConfig);

useHead({
  title: "这是测试",
  meta: [{ name: "description", content: "我是meta标签描述内容" }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});

// useState组合函数
const foo = useMyList();
console.log("composables / useState组合函数", foo);
console.log(
  "moduleList转换方法transformDataToArrays =>",
  transformDataToArrays(foo.value)
);

// useCookie组合函数
const counter = useCookie("counter");
counter.value = counter.value || Math.round(Math.random() * 1000);
</script>

<style lang="less" scoped>
h2 {
  padding: 20px;
}
</style>
