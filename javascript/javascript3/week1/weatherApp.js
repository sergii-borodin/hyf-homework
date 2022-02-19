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
}

function onInputChange(e) {
  console.log(e.currentTarget.value);
  city_Target = e.currentTarget.value;
  return city_Target;
}

function oncheckWeatherBtnClick(e) {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city_Target}&units=metric&appid=2673f5af061bc091866ecf8ec2167055`;
  (async function getWeatherData() {
    const response = await fetch(weatherURL);
    const dataWeather = await response.json();
    document.getElementById("chosenCity").innerText = dataWeather.name;
    document.getElementById("temperature").innerText =
      Math.round(dataWeather.main.temp) + " °C";
    document.getElementById("windSpeed").innerText =
      Math.round(dataWeather.wind.speed * 10) / 10 + " m/s";
    document.getElementById(
      "weatherTypeIcon"
    ).src = `http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}.png`;
    document.getElementById("clouds").innerText = dataWeather.clouds.all + " %";
    document.getElementById("sunriseTime").innerText = new Date(
      dataWeather.sys.sunrise * 1000
    ).toLocaleTimeString();
    document.getElementById("sunsetTime").innerText = new Date(
      dataWeather.sys.sunset * 1000
    ).toLocaleTimeString();
    console.log(dataWeather);
    return response;
  })();

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
