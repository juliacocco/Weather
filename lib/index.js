// TODO: Write your JS code in here
// TODO: Write your JS code in here
import { fetchWeather, fetchCurrentPositionWeather } from './weather';
import { initSelect2 } from './plugins/init_select2';

// Initialize plugins
initSelect2();

// AJAX call
fetchWeather();

// Event listeners
const form = document.querySelector('form');
const cityInput = document.getElementById('city-input');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetchWeather(cityInput.value);
});

const currentLocationLink = document.getElementById('current-location');
currentLocationLink.addEventListener('click', fetchCurrentPositionWeather);
