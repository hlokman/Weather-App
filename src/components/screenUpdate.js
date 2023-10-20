const form = document.querySelector("#form");
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

//const forecastImage = document.querySelector(".forecastImage");

function screenUpdate(
  city,
  country,
  tempC,
  tempF,
  conditionPara,
  feelsC,
  feelsF,
  humidityPara,
  gustK,
  gustM
) {
  locationName.textContent = "";
  locationName.textContent = `${city}`;

  locationCountry.textContent = "";
  locationCountry.textContent = `${country}`;

  temp_c.textContent = "";
  temp_c.textContent = `${tempC}°C`;

  temp_f.textContent = "";
  temp_f.textContent = `${tempF}°F`;

  condition.textContent = "";
  condition.textContent = `${conditionPara}`;

  feelslike_c.textContent = "";
  feelslike_c.textContent = `Feels like: ${feelsC}°C`;

  feelslike_f.textContent = "";
  feelslike_f.textContent = `Feels like: ${feelsF}°F`;

  humidity.textContent = "";
  humidity.textContent = `Humidity: ${humidityPara}%`;

  gust_kph.textContent = "";
  gust_kph.textContent = `Gust: ${gustK} Km/h`;

  gust_mph.textContent = "";
  gust_mph.textContent = `Gust: ${gustM} Mph`;
}

/*function imageUpdate(image) {
  forecastImage.src = `${image}`;
}*/

export {
  screenUpdate,
  temp_c,
  temp_f,
  feelslike_c,
  feelslike_f,
  gust_kph,
  gust_mph,
  /*imageUpdate,*/
};
