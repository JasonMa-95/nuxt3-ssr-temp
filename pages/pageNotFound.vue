<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
    class="result"
  >
    <template #extra>
      <a-button type="primary" @click="backHome">Back Home</a-button>
    </template>
  </a-result>
</template>
<script setup>
onMounted(async () => {
  document.getElementsByTagName("body")[0].style["pointer-events"] = "auto";
});

const backHome = () => {
  navigateTo("/");
};
</script>

<style lang="less" scoped>
.result {
  padding-top: 20vh;
}
</style>
