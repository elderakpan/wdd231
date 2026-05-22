// ==============================
// MOBILE MENU (SMOOTH TOGGLE)
// ==============================
const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector(".navigation");

menuButton?.addEventListener("click", () => {
    nav.classList.toggle("open");

    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !expanded);
});


// ==============================
// FOOTER DATES
// ==============================
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


// ==============================
// DARK MODE TOGGLE (NEW)
// ==============================
const darkToggle = document.createElement("button");
darkToggle.textContent = "🌙 Dark Mode";
darkToggle.style.marginLeft = "1rem";
darkToggle.style.padding = "0.5rem";

document.querySelector("header")?.appendChild(darkToggle);

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// ==============================
// WEATHER (IMPROVED)
// ==============================
const API_KEY = "YOUR_API_KEY_HERE";

const lat = 5.0377;
const lon = 7.9128;

const tempEl = document.querySelector("#current-temp");
const descEl = document.querySelector("#weather-desc");
const forecastEl = document.querySelector("#forecast-list");

async function getWeather() {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        const data = await res.json();

        tempEl.textContent = `${Math.round(data.main.temp)}°C`;
        descEl.textContent = data.weather[0].description;

        getForecast();

    } catch (err) {
        descEl.textContent = "Weather unavailable";
    }
}

async function getForecast() {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        const data = await res.json();

        forecastEl.innerHTML = "";

        const daily = data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        ).slice(0, 3);

        daily.forEach(day => {
            const li = document.createElement("li");

            const date = new Date(day.dt_txt);

            li.innerHTML = `
                <strong>${date.toDateString().slice(0, 3)}</strong>
                — ${Math.round(day.main.temp)}°C
                — ${day.weather[0].main}
            `;

            forecastEl.appendChild(li);
        });

    } catch {
        forecastEl.innerHTML = "<li>Forecast unavailable</li>";
    }
}


// ==============================
// SPOTLIGHTS (UPGRADED JSON STYLE)
// ==============================
const spotlightContainer = document.querySelector("#spotlight-container");

const members = [
    { name: "Akwa Tech Solutions", level: "Gold", desc: "IT & software solutions provider." },
    { name: "Uyo Agro Alliance", level: "Silver", desc: "Agricultural innovation group." },
    { name: "Ibom Traders Network", level: "Gold", desc: "Trade and commerce network." },
    { name: "Green Energy Hub", level: "Silver", desc: "Renewable energy solutions." }
];

function loadSpotlights() {
    if (!spotlightContainer) return;

    const filtered = members.filter(m =>
        m.level === "Gold" || m.level === "Silver"
    );

    const selected = filtered
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

    spotlightContainer.innerHTML = "";

    selected.forEach(m => {
        const card = document.createElement("div");
        card.className = "spotlight-card";

        card.innerHTML = `
            <h3>${m.name}</h3>
            <p><strong>${m.level}</strong> Member</p>
            <p>${m.desc}</p>
        `;

        spotlightContainer.appendChild(card);
    });
}

getWeather();
loadSpotlights();