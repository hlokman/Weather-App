import "./style/style.css";
import {
  screenUpdate,
  feelslike_c,
  feelslike_f,
  temp_c,
  temp_f,
  gust_kph,
  gust_mph,
} from "./components/screenUpdate";

const switchFC = document.querySelector("#switch");
const img = document.querySelector(".forecastImage");

async function fetchWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=ebc59f6b584741b589f203651231410&q=${location}`
    );
    const json = await response.json();
    screenUpdate(
      json.location.name,
      json.location.country,
      json.current.temp_c,
      json.current.temp_f,
      json.current.condition.text,
      json.current.feelslike_c,
      json.current.feelslike_f,
      json.current.humidity,
      json.current.gust_kph,
      json.current.gust_mph
    );
    fetchImage(json.current.condition.text);
  } catch {
    alert("No matching location found, please retry");
  }

  async function fetchImage(weather) {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=qrwtm0asJ8KH3GNaAfOj54FYDMCrKjnw&s=${weather}`
      );
      const json = await response.json();
      img.src = json.data.images.original.url;
    } catch {
      alert("Please reload the page or check the Giphy's API");
    }
  }
}

let activeLocation = "London";
fetchWeather(activeLocation);

form.addEventListener("submit", (e) => {
  activeLocation = e.currentTarget.location.value;
  fetchWeather(activeLocation);
  form.reset();
  e.preventDefault();
});

switchFC.addEventListener("click", (e) => {
  const square = document.querySelector("#square");

  square.classList.toggle("trigger");
  temp_c.classList.toggle("invisible");
  temp_f.classList.toggle("invisible");
  feelslike_c.classList.toggle("invisible");
  feelslike_f.classList.toggle("invisible");
  gust_kph.classList.toggle("invisible");
  gust_mph.classList.toggle("invisible");
});
