const tempEl = document.getElementById("temperature");
const descEl = document.getElementById("weather-description");
const forecastEl = document.getElementById("forecast");

// 🌍 Uyo location
const city = "Uyo";
const apiKey = "YOUR_API_KEY_HERE";

// Current weather API
const currentURL =
    `https://api.openweathermap.org/data/2.5/weather?q=${city},NG&units=metric&appid=${apiKey}`;

// Forecast API
const forecastURL =
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},NG&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        // CURRENT WEATHER
        const currentResponse = await fetch(currentURL);
        const currentData = await currentResponse.json();

        if (tempEl) {
            tempEl.textContent = `${Math.round(currentData.main.temp)}°C`;
        }

        if (descEl) {
            descEl.textContent = currentData.weather[0].description;
        }

        // FORECAST
        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();

        if (forecastEl) {
            forecastEl.innerHTML = "";

            // pick one forecast per day (simple 3-day display)
            const daily = forecastData.list.filter(item =>
                item.dt_txt.includes("12:00:00")
            ).slice(0, 3);

            daily.forEach(day => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <p><strong>${day.dt_txt.split(" ")[0]}</strong></p>
                    <p>${Math.round(day.main.temp)}°C</p>
                    <p>${day.weather[0].description}</p>
                    <hr>
                `;
                forecastEl.appendChild(div);
            });
        }

    } catch (error) {
        console.error("Weather error:", error);

        if (tempEl) tempEl.textContent = "N/A";
        if (descEl) descEl.textContent = "Weather unavailable";
        if (forecastEl) forecastEl.textContent = "Forecast unavailable";
    }
}

getWeather();