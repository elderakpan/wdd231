const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {

    navigation.classList.toggle('open');

    const isOpen = navigation.classList.contains('open');

    menuButton.setAttribute('aria-expanded', isOpen);
});

/* FOOTER */
document.querySelector('#currentyear').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modified: ${document.lastModified}`;

/* WEATHER */
const apiKey = 'YOUR_API_KEY';
const lat = '5.0333';
const lon = '7.9333';

const weatherURL =
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {

    try {

        const response = await fetch(weatherURL);

        const data = await response.json();

        document.querySelector('#current-temp').textContent =
            `${Math.round(data.main.temp)}°C`;

        document.querySelector('#weather-desc').textContent =
            data.weather[0].description;

    } catch (error) {

        console.error('Weather Error:', error);
    }
}

async function getForecast() {

    try {

        const response = await fetch(forecastURL);

        const data = await response.json();

        const forecastList =
            document.querySelector('#forecast-list');

        forecastList.innerHTML = '';

        const filtered =
            data.list.filter(item =>
                item.dt_txt.includes('12:00:00')
            );

        filtered.slice(0, 3).forEach(day => {

            const li = document.createElement('li');

            const date =
                new Date(day.dt_txt).toLocaleDateString(
                    'en-US',
                    { weekday: 'long' }
                );

            li.textContent =
                `${date}: ${Math.round(day.main.temp)}°C`;

            forecastList.appendChild(li);
        });

    } catch (error) {

        console.error('Forecast Error:', error);
    }
}

getWeather();
getForecast();