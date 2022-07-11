function success(pos) {
  console.log(pos);
  const WEATHER_API_KEY = "bbe8bd0e5f94046e658716c477c984c3";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      document.querySelector("#city").textContent = data.name;
      document.querySelector("#temp").textContent = data.main.temp;
      document.querySelector("#main").textContent = data.weather[0].main;
      document.querySelector("#desc").textContent = data.weather[0].desc;
    });
}

function error(err) {
  console.log("Location error", err);
}

if (navigator.getGamepads) {
  navigator.geolocation.getCurrentPosition(success, error);
}
