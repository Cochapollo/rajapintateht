<template>
  <div>
  <div class="map">
    <l-map class="is-overlay"
           :zoom="zoom"
           :center="center"
           >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
      v-for="bike in this.bikeStops.data.data.bikeRentalStations"
      :key="bike.name"
      :lat-lng="[bike.lat, bike.lon]">
        <l-popup>
          <BikeStation :bike="bike"></BikeStation>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
  <div class="weather z">
    <Weather :weather="weather" />
  </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup} from "vue2-leaflet";
import {getBikes,getWeatherData} from "@/req";
import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import BikeStation from "@/components/BikeStation";
import Weather from "@/components/Weather";
import convert from "xml-js";
export default {
  name: "Example",
  components: {BikeStation, LMap, LTileLayer, LMarker,LPopup,Weather},
  data() {
    return {
      zoom: 13,
      center: L.latLng(60.1708, 24.9375),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      bikeStops: [],
      weather: "",
    }
  },
  computed: {},
  methods: {
    getBikes

  },
  async created() {
    this.bikeStops = await getBikes()
    this.weather = convert.xml2js(await getWeatherData(),{
      compact: true,
          spaces: 4
    });
    console.log(this.weather)

  }
}
</script>
<style scoped>
.drop {
  position: absolute;
}
.weather {
  position: fixed;
  width: auto;
  height: auto;
  margin-top: 55px;
  margin-right: 0.5vw;
  top: 0;
  right: 0;
  object-fit: contain;
  background-color: white;
  overflow: auto;
}
.z {
  z-index: 2;
  padding-top: 2vh;
  padding-left: 2vh;
}
.map {
  height: 90vh;
  width: 100vw;
  z-index: 1;
  position: absolute;
}
.dropdown-content {
  max-height: 40vh;
  overflow: auto;
}
</style>