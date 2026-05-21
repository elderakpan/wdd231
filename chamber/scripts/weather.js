const apiKey = "YOUR_API_KEY";

// Change this to your chamber location (Uyo, Akwa Ibom)
const lat = 5.0377;
const lon = 7.9128;

const url =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather data not available");
        }

        const data = await response.json();

        // CURRENT WEATHER (first item)
        document.querySelector("#temperature").textContent =
            Math.round(data.list[0].main.temp);

        document.querySelector("#description").textContent =
            data.list[0].weather[0].description;

        // 3-DAY FORECAST (pick 12:00 PM each day)
        const forecastList = document.querySelector("#forecast");
        forecastList.innerHTML = "";

        const dailyData = data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

        dailyData.slice(0, 3).forEach(day => {

            const date = new Date(day.dt_txt);

            const li = document.createElement("li");

            li.textContent =
                `${date.toDateString().slice(0, 10)}: ${Math.round(day.main.temp)}°C`;

            forecastList.appendChild(li);
        });

    } catch (error) {
        console.error("Weather error:", error);

        document.querySelector("#description").textContent =
            "Weather unavailable at the moment.";
    }
}

getWeather();