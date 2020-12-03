function formatDate() {
  let now = new Date();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  day = day.trim();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentTime = document.querySelector("#current-time");
  let currentDay = document.querySelector("#current-day");
  let currentDate = document.querySelector("#current-date");
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();

  currentTime.innerHTML = `${hours}:${minutes}`;
  currentDay.innerHTML = `${day}`;
  currentDate.innerHTML = `${month} ${date}, ${year}`;
}
formatDate();

//1
function displayWeatherConditons(response) {
  console.log(response.data);
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    "#precipiation"
  ).innerHTML = response.data.weather[0].description.toUpperCase();
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

//2
function searchCity(city) {
  let apiKey = "f6b669c29af99bb3c457d949b0af81ab";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherConditons);
  //console.log(apiUrl)--> zawsze sprawdzać
}

//3
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#location-entry").value;
  searchCity(city);
}

searchCity("Austin Texas");

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
