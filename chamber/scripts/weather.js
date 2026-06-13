const apiKey = "REAL_KEY";

const lat = 5.0377;
const lon = 7.9128;

const currentURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function loadWeather() {
    try {
        const current = await fetch(currentURL).then(r => r.json());

        document.querySelector("#temperature").textContent =
            `${Math.round(current.main.temp)}°C`;

        document.querySelector("#weather-description").textContent =
            current.weather[0].description;

        const forecastData = await fetch(forecastURL).then(r => r.json());

        const forecastBox = document.querySelector("#forecast");
        forecastBox.innerHTML = "";

        const daily = forecastData.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

        daily.slice(0, 3).forEach(day => {
            const card = document.createElement("div");
            card.classList.add("forecast-card");

            card.innerHTML = `
                <p><strong>${new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" })}</strong></p>
                <p>${Math.round(day.main.temp)}°C</p>
            `;

            forecastBox.appendChild(card);
        });

    } catch (err) {
        console.error("Weather error:", err);
    }
}

loadWeather();