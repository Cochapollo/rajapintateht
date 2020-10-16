<template>
  <div class="hello">
      <div class="table-container">
        <table
            class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
        >
          <thead>
          <tr>
            <th>Station name</th>
            <th>Free bikes</th>
            <th>Empty slots</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="bikeStop in bikeStops.data.data.bikeRentalStations" :key="bikeStop.name">
            <td>{{ bikeStop.name }}</td>
            <td>{{ bikeStop.bikesAvailable}}</td>
            <td>{{ bikeStop.spacesAvailable }}</td>
            <td>{{ bikeStop.lat }}</td>
            <td>{{ bikeStop.lon }}</td>
          </tr>
          </tbody>
        </table>

    </div>
    <button @click="getBikes">Reload</button>
  </div>
</template>

<script>
import { getBikes } from '@/req.js'
//import axios from 'axios'
//import L from "leaflet"
export default {
  name: 'HelloWorld',
  props: {
    msg: String,

  },
  data(){
    return {
      bikeStops: [],
    }
  },
  methods: {
    getBikes

  },
  async created(){
   this.bikeStops = await getBikes()
  },
}
</script>
<style scoped>
</style>
