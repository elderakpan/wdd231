const apiKey = "YOUR_API_KEY";

const lat = 5.0377;
const lon = 7.9128;

const url =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw Error(await response.text());
        }

        const data = await response.json();

        displayWeather(data);

    } catch (error) {
        console.error(error);
    }
}

function displayWeather(data) {

    document.querySelector("#current-temp").innerHTML =
        `${data.list[0].main.temp.toFixed(1)}°C`;

    document.querySelector("#weather-desc").innerHTML =
        data.list[0].weather[0].description;

    const forecast = document.querySelector("#forecast");

    forecast.innerHTML = "";

    for (let i = 8; i < 32; i += 8) {

        const li = document.createElement("li");

        const date =
            new Date(data.list[i].dt_txt);

        li.innerHTML =
            `${date.toLocaleDateString("en-US", {
                weekday: "long"
            })}: ${data.list[i].main.temp.toFixed(1)}°C`;

        forecast.appendChild(li);
    }
}

getWeather();