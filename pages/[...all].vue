<template>
  <div>
    <PageNotFound />
  </div>
</template>

<script setup>
/***
 * 自定义的404页面（没有能匹配的路由时会采用）
 */
import PageNotFound from "./pageNotFound.vue";

setResponseStatus(404);
</script>
