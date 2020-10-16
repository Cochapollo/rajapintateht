<template>
  <div v-if="weather" class="w">
    <h1>
      Weather in {{ weather.current.city._attributes.name }},{{
        weather.current.city.country._text
      }}
    </h1>
    <div class="temp">
      <img
          :src="
          'http://openweathermap.org/img/wn/' +
            weather.current.weather._attributes.icon +
            '@2x.png'
        "
      />
      <h1>
        {{
          parseFloat(weather.current.temperature._attributes.value).toFixed(1)
        }}℃
      </h1>
    </div>
    <p>{{ weather.current.weather._attributes.value }}</p>
    <p>get at {{ getNow() }}</p>
    <table class="table is-bordered is-striped is-narrow">
      <tbody>
      <tr>
        <td>Wind</td>
        <td>
          <div class="wind">
            <p>
              {{ weather.current.wind.speed._attributes.name }}
              {{ weather.current.wind.speed._attributes.value }} m/s
            </p>
            <p>
              {{ weather.current.wind.direction._attributes.name }} ({{
                weather.current.wind.direction._attributes.value
              }})
            </p>
          </div>
        </td>
      </tr>
      <tr>
        <td>Cloudiness</td>
        <td>{{ weather.current.clouds._attributes.name }}</td>
      </tr>
      <tr>
        <td>Pressure</td>
        <td>{{ weather.current.pressure._attributes.value }} hPa</td>
      </tr>
      <tr>
        <td>Humidity</td>
        <td>{{ weather.current.humidity._attributes.value }}%</td>
      </tr>
      <tr>
        <td>Sunrise</td>
        <td>
          {{ convertTime(weather.current.city.sun._attributes.rise) }}
        </td>
      </tr>
      <tr>
        <td>Sunset</td>
        <td>
          {{ convertTime(weather.current.city.sun._attributes.set) }}
        </td>
      </tr>
      <tr>
        <td>Geo coords</td>
        <td>
          {{
            [
              parseFloat(weather.current.city.coord._attributes.lat),
              parseFloat(weather.current.city.coord._attributes.lon)
            ]
          }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["weather"],
  data: () => ({}),
  methods: {
    convertTime(value) {
      return moment
          .utc(value)
          .utcOffset(moment().utcOffset())
          .format("HH:mm");
    },
    getNow() {
      moment.locale("fi");
      return moment()
          .locale("fi")
          .format("DD.MM.YYYY [klo] HH:mm:ss");
    }
  }
};
</script>

<style>
.w {
  display: flex;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  flex-direction: column;
  padding: 1vw;
}
.wind {
  display: flex;
  flex-direction: column;
}
.w h1 {
  display: flex;
  font-size: 30px;
  font-weight: bold;
}
.temp {
  display: flex;
  align-items: center;
}
</style>