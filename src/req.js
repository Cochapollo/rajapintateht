import axios from "axios";

export async function getBikes () {

     var result = await axios({
        url: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
        method: 'POST',
        headers: {"Content-Type": "application/graphql"},
        data: `{bikeRentalStations {
            name
            bikesAvailable
            spacesAvailable
            lon
            lat
          }
        }`
    })

        return result


}

export async function getWeatherData() {
    //const cityname = "Helsinki"
    const APIkey = "bebec2b913a27f3b98c83f69fa9ad796"
    var reponse = await axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&appid=${APIkey}&mode=xml`)
        return reponse.data

}
