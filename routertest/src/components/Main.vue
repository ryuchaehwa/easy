<template>
  <l-map style="height: 80%; width: 100%" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
  </l-map>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Main",
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 3,
      center: [47.41322, -1.219482],
      bounds: null,
    };
  },
  components: {
    LMap,
    LTileLayer,
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {},
  },
};
</script>
