import "./style/style.css";

const locationName = document.querySelector("#locationName");
const locationCountry = document.querySelector("#locationCountry");
const temp_c = document.querySelector("#temp_c");
const temp_f = document.querySelector("#temp_f");
const condition = document.querySelector("#condition");
const feelslike_c = document.querySelector("#feelslike_c");
const feelslike_f = document.querySelector("#feelslike_f");
const humidity = document.querySelector("#humidity");
const gust_kph = document.querySelector("#gust_kph");
const gust_mph = document.querySelector("#gust_mph");
const switchFC = document.querySelector("#switch");
const img = document.querySelector(".forecastImage");

async function fetchWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=ebc59f6b584741b589f203651231410&q=${location}`
    );
    const json = await response.json();
    locationName.textContent = `${json.location.name}`;
    locationCountry.textContent = `${json.location.country}`;
    temp_c.textContent = `${json.current.temp_c}°C`;
    temp_f.textContent = `${json.current.temp_f}°F`;
    condition.textContent = `${json.current.condition.text}`;
    feelslike_c.textContent = `Feels like: ${json.current.feelslike_c}°C`;
    feelslike_f.textContent = `Feels like: ${json.current.feelslike_f}°F`;
    humidity.textContent = `Humidity: ${json.current.humidity}%`;
    gust_kph.textContent = `Gust: ${json.current.gust_kph} Km/h`;
    gust_mph.textContent = `Gust: ${json.current.gust_mph} Mph`;
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
