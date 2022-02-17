let city_Target = "";
const bodyRef = document.getElementsByTagName("body");
const inputCityRef = document.getElementById("inputCity");
const checkWeatherBtnRef = document.getElementById("checkWeatherBtn");
const errorNotification = document.createElement("p");
const iconRef = document.getElementById("icon");
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
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city_Target}&appid=2673f5af061bc091866ecf8ec2167055`;
  async function getWeatherData() {
    const response = await fetch(weatherURL);
    const dataWeather = await response.json();
    // document.getElementById("para").textContent = dataWeather.name;
    // document.getElementById("para").textContent = dataWeather.main.temp;
    // document.getElementById("para").textContent = dataWeather.wind.speed;
    // document.getElementById("para").textContent = dataWeather.wind.speed;
    // document.getElementById("para").textContent = dataWeather.clouds.all;
    // document.getElementById("para").textContent = dataWeather.sys.sunrise;
    // document.getElementById("para").textContent = dataWeather.sys.sunset;
    const dataArrWeather = [
      dataWeather.name,
      dataWeather.main.temp,
      dataWeather.wind.speed,
      dataWeather.clouds.all,
      dataWeather.sys.sunrise,
      dataWeather.sys.sunset,
    ];
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
