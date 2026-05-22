const API_KEY = "YOUR_API_KEY_HERE";

const url =
`https://api.openweathermap.org/data/2.5/forecast?lat=5.0377&lon=7.9237&appid=${API_KEY}&units=metric`;

const tempEl = document.querySelector("#current-temp");
const descEl = document.querySelector("#weather-desc");
const listEl = document.querySelector("#forecast-list");

async function getWeather() {
    try {
        const res = await fetch(url);
        const data = await res.json();

        tempEl.textContent = `${Math.round(data.list[0].main.temp)}°C`;
        descEl.textContent = data.list[0].weather[0].description;

        listEl.innerHTML = "";

        const days = [8, 16, 24];

        days.forEach(i => {
            const li = document.createElement("li");

            li.textContent =
                `${new Date(data.list[i].dt_txt).toLocaleDateString("en-US", {
                    weekday: "long"
                })}: ${Math.round(data.list[i].main.temp)}°C`;

            listEl.appendChild(li);
        });

    } catch (err) {
        console.error("Weather error:", err);
    }
}

getWeather();