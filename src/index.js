import "./style/style.css";

const form = document.querySelector("#form");

async function fetchWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=ebc59f6b584741b589f203651231410&q=${location}`
    );
    const json = await response.json();
    console.log(json);
    console.log(json.location.name);
    console.log(json.location.country);
    console.log(json.current.last_updated);
    console.log(json.current.temp_c);
    console.log(json.current.temp_f);
    console.log(json.current.condition.text);
    console.log(json.current.humidity);
    console.log(json.current.gust_kph);
    console.log(json.current.gust_mph);
  } catch {
    console.log("No matching location found, please retry");
  }
}

let activeLocation = "Paris";

fetchWeather(activeLocation);

form.addEventListener("submit", (e) => {
  console.log(e.currentTarget.location.value);
  activeLocation = e.currentTarget.location.value;
  fetchWeather(activeLocation);
  form.reset();
  e.preventDefault();
});
