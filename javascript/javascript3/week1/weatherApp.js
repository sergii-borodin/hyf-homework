let city_Target = "";
const bodyRef = document.getElementsByTagName("body");
const inputCityRef = document.getElementById("inputCity");
const checkWeatherBtnRef = document.getElementById("checkWeatherBtn");
const errorNotification = document.createElement("p");
const listOfWeatherDescriptionRef = document.getElementById(
  "listOfWeatherDescription"
);

inputCityRef.addEventListener("change", onInputChange);
inputCityRef.addEventListener("focus", onFocus);
checkWeatherBtnRef.addEventListener("click", oncheckWeatherBtnClick);

function onFocus(e) {
  errorNotification.textContent = "";
  city_Target = "";
}

function onInputChange(e) {
  console.log(e.currentTarget.value);
  city_Target = e.currentTarget.value;
  return city_Target;
}

function oncheckWeatherBtnClick(e) {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city_Target}&units=metric&appid=2673f5af061bc091866ecf8ec2167055`;
  async function getWeatherData() {
    const response = await fetch(weatherURL);
    const dataWeather = await response.json();
    document.getElementById("chosenCity").textContent += " " + dataWeather.name;
    document.getElementById("temperature").textContent +=
      " " + Math.round(dataWeather.main.temp) + " °C";
    document.getElementById("windSpeed").textContent +=
      " " + Math.round(dataWeather.wind.speed * 10) / 10 + " m/s";
    document.getElementById(
      "weatherTypeIcon"
    ).src = `http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}.png`;
    document.getElementById("clouds").textContent +=
      " " + dataWeather.clouds.all + " %";
    document.getElementById("sunriseTime").textContent +=
      " " + new Date(dataWeather.sys.sunrise * 1000).toLocaleTimeString();
    document.getElementById("sunsetTime").textContent +=
      " " + new Date(dataWeather.sys.sunset * 1000).toLocaleTimeString();
    dataArrWeather.forEach((data) => {
      const liItem = document.createElement("li");
      liItem.textContent = data;
      document.body.appendChild(liItem);
    });
    console.log(dataWeather);
  }

  getWeatherData()
    .then((response) => console.log("success", response))
    .catch((error) => {
      errorNotification.textContent = "Error! Please enter a valid city name";
      errorNotification.style.color = "red";
      document.body.appendChild(errorNotification);
      console.log("error", error);

      return errorNotification;
    });
}
