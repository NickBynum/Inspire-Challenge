import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  document.getElementById("weather").innerHTML = `<span>${Math.floor((store.State.weather.kelvin - 273.15) * 9 / 5 + 32) }&#8457;</span>`
  console.log("THE WEATHER MAN SAYS:", store.State.weather);
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
