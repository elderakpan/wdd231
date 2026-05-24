const apiKey = 'YOUR_API_KEY';

const apiKey = 'YOUR_API_KEY';

/* UYO, AKWA IBOM */
const city = 'Uyo';
const countryCode = 'NG';

const currentTemp =
    document.querySelector('#current-temp');

const weatherDescription =
    document.querySelector('#weather-desc');

const forecastList =
    document.querySelector('#forecast-list');

/* CURRENT WEATHER URL */
const weatherURL =
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${apiKey}`;

/* FORECAST URL */
const forecastURL =
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&units=metric&appid=${apiKey}`;

/* CURRENT WEATHER */
async function getCurrentWeather() {

    try {

        const response =
            await fetch(weatherURL);

        if (!response.ok) {
            throw new Error('Weather data not found');
        }

        const data =
            await response.json();

        displayCurrentWeather(data);

    } catch (error) {

        console.error(
            'Weather Error:',
            error
        );

        currentTemp.textContent =
            'Unavailable';

        weatherDescription.textContent =
            'Unable to load weather data';
    }
}

/* DISPLAY CURRENT WEATHER */
function displayCurrentWeather(data) {

    const temperature =
        Math.round(data.main.temp);

    const description =
        data.weather[0].description;

    currentTemp.textContent =
        `${temperature}°C`;

    weatherDescription.textContent =
        `Uyo Weather: ${description}`;
}

/* FORECAST */
async function getForecast() {

    try {

        const response =
            await fetch(forecastURL);

        if (!response.ok) {
            throw new Error('Forecast data not found');
        }

        const data =
            await response.json();

        displayForecast(data);

    } catch (error) {

        console.error(
            'Forecast Error:',
            error
        );

        forecastList.innerHTML =
            '<li>Forecast unavailable</li>';
    }
}

/* DISPLAY FORECAST */
function displayForecast(data) {

    forecastList.innerHTML = '';

    const filteredForecast =
        data.list.filter(item =>
            item.dt_txt.includes('12:00:00')
        );

    filteredForecast
        .slice(0, 3)
        .forEach(day => {

            const listItem =
                document.createElement('li');

            const forecastDate =
                new Date(day.dt_txt);

            const formattedDate =
                forecastDate.toLocaleDateString(
                    'en-US',
                    { weekday: 'long' }
                );

            const temperature =
                Math.round(day.main.temp);

            listItem.textContent =
                `${formattedDate}: ${temperature}°C`;

            forecastList.appendChild(listItem);
        });
}

/* RUN FUNCTIONS */
getCurrentWeather();
getForecast();