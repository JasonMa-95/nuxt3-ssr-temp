<script setup></script>

<template>
  <div class="homePage">
    <NuxtLayout name="header" />
    <NuxtLayout>
      这是通过插槽插入的内容

      <NuxtLink to="/demo">去demo页</NuxtLink>
    </NuxtLayout>
    <NuxtLayout name="footer" />
  </div>
</template>
