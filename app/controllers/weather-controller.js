import WeatherService from "../services/weather-service.js";
import store from "../store.js";

function drawWeather() {
  document.getElementById("weather").innerHTML = `<span>${Math.floor((store.State.weather.kelvin - 273.15) * 9 / 5 + 32) }&#8457;</span><br><span style="font-size:1rem;">${store.State.weather.city}</span>`
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
