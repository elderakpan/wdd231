const apiKey = 'YOUR_API_KEY';

const city = 'Uyo';
const country = 'NG';

const tempEl =
    document.querySelector('#current-temp');

const descEl =
    document.querySelector('#weather-desc');

const forecastEl =
    document.querySelector('#forecast-list');

const currentURL =
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

const forecastURL =
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKey}`;

async function getWeather() {

    try {

        const response =
            await fetch(currentURL);

        const data =
            await response.json();

        tempEl.textContent =
            `${Math.round(data.main.temp)}°C`;

        descEl.textContent =
            data.weather[0].description;

    } catch (error) {

        tempEl.textContent = "N/A";
        descEl.textContent = "Weather unavailable";
    }
}

async function getForecast() {

    try {

        const response =
            await fetch(forecastURL);

        const data =
            await response.json();

        forecastEl.innerHTML = "";

        const daily =
            data.list.filter(item =>
                item.dt_txt.includes("12:00:00")
            ).slice(0, 3);

        daily.forEach(day => {

            const li =
                document.createElement("li");

            const date =
                new Date(day.dt_txt)
                    .toLocaleDateString("en-US", {
                        weekday: "long"
                    });

            li.textContent =
                `${date}: ${Math.round(day.main.temp)}°C`;

            forecastEl.appendChild(li);
        });

    } catch (error) {

        forecastEl.innerHTML =
            "<li>Forecast unavailable</li>";
    }
}

getWeather();
getForecast();