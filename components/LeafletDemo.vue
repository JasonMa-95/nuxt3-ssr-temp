<template>
  <div>
    <div class="mapBox">
      <p class="title">这是一个LeafletDemo<h6>【使用的是openstreetmap，得翻墙，这是国外资源】</h6></p>

      <LMap
        :useGlobalLeaflet="false"
        ref="map"
        :zoom="data.zoom"
        :center="data.center"
      >
        <LTileLayer
          :url="data.url"
          :attribution="data.attribution"
          layer-type="base"
          name="OpenStreetMap"
        />
        <LMarker :lat-lng="[47.41322, -1.0482]"></LMarker>
        <LMarker :lat-lng="[46.99322, -1.50482]"></LMarker>

        <LMarker :lat-lng="data.center"></LMarker>

        <l-circle-marker
          :lat-lng="data.circle.center"
          :radius="data.circle.radius"
          :color="data.circle.color"
        />
      </LMap>
      <!-- <div class="a">
        <button @click="changeCenter()">组件内点击事件 - 修改中心点</button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
// import L from "leaflet"; // PS:nuxt3-leaflet插件, nuxt3内无法使用L

const data = reactive({
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution:
    '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  zoom: 15,
  //   center: [39.9096, 116.3972],
  center: [47.41322, -1.0482],
  circle: {
    center: [47.41322, -1.0482],
    radius: 6,
    color: "green",
  },
});

const changeCenter = () => {
  console.log("changeCenter");
  data.center = [39.9096, 116.3972];
};

// console.log("L", L);
// const center = ref(L.latLng(39.9096, 116.3972)); // L.latLng(39.9096, 116.3972), // 地图中心点
</script>

<style lang="less">
.mapBox {
  height: 1080px;
  width: 100%;
  position: relative;

  .title {
    .fcf(60,aqua,600);
    text-align: center;
    margin-top: 200px;
    margin-bottom: 80px;
  }

  .a {
    position: absolute;
    top: 100px;
    left: 100px;
    z-index: 1000;
    width: 200px;
    height: 300px;
    background-color: aqua;
  }
}

@media (max-width: 1024px) {
  .mapBox {
    height: 300px;

    .title {
      .fcf(30,aqua,600);
      text-align: center;
      margin-top: 100px;
      margin-bottom: 40px;
    }
  }
}
</style>
