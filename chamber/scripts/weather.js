const apiKey = "YOUR_API_KEY";
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=5.0377&lon=7.9128&units=metric&appid=${apiKey}`;

async function getWeather() {
const res = await fetch(url);
const data = await res.json();

document.querySelector("#temp").textContent =
data.list[0].main.temp + "°C";

document.querySelector("#desc").textContent =
data.list[0].weather[0].description;

const forecast = document.querySelector("#forecast");
forecast.innerHTML = "";

for (let i = 8; i < 32; i += 8) {
const li = document.createElement("li");
li.textContent =
new Date(data.list[i].dt_txt).toLocaleDateString("en-US", {
weekday: "long"
}) + ": " + data.list[i].main.temp + "°C";
forecast.appendChild(li);
}
}

getWeather();