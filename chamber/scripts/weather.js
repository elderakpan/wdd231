const tempEl = document.querySelector("#temperature");
const descEl = document.querySelector("#weather-description");
const forecastEl = document.querySelector("#forecast");

// Uyo, Nigeria coordinates
const lat = 5.0377;
const lon = 7.9128;

const apiKey = "YOUR_OPENWEATHER_API_KEY";

const currentURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {

        const currentRes = await fetch(currentURL);
        const currentData = await currentRes.json();

        tempEl.textContent = `${Math.round(currentData.main.temp)}°C`;
        descEl.textContent = currentData.weather[0].description;

        const forecastRes = await fetch(forecastURL);
        const forecastData = await forecastRes.json();

        forecastEl.innerHTML = "";

        const daily = forecastData.list
            .filter(item => item.dt_txt.includes("12:00:00"))
            .slice(0, 3);

        daily.forEach(day => {
            const div = document.createElement("div");
            div.classList.add("forecast-card");

            div.innerHTML = `
                <p><strong>${day.dt_txt.split(" ")[0]}</strong></p>
                <p>${Math.round(day.main.temp)}°C</p>
                <p>${day.weather[0].description}</p>
            `;

            forecastEl.appendChild(div);
        });

    } catch (error) {
        console.error(error);
        tempEl.textContent = "Unavailable";
        descEl.textContent = "Weather unavailable";
        forecastEl.textContent = "Forecast unavailable";
    }
}
