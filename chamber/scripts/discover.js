import { places } from "../data/places.mjs";

const container = document.querySelector("#places-container");

places.forEach(place => {

    const card = document.createElement("article");

    card.classList.add("card");

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img src="${place.image}"
                 alt="${place.name}"
                 loading="lazy"
                 width="300"
                 height="200">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button>Learn More</button>
    `;

    container.appendChild(card);
});

const message = document.querySelector("#visitMessage");

const lastVisit = Number(localStorage.getItem("lastVisit"));

const now = Date.now();

if (!lastVisit) {

    message.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const daysBetween = Math.floor(
        (now - lastVisit) / 86400000
    );

    if (daysBetween < 1) {

        message.textContent =
            "Back so soon! Awesome!";

    } else if (daysBetween === 1) {

        message.textContent =
            "You last visited 1 day ago.";

    } else {

        message.textContent =
            `You last visited ${daysBetween} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);

const areas = ["a","b","c","d","e","f","g","h"];

places.forEach((place, index) => {
    const card = document.createElement("article");

    card.classList.add("discover-card");

    card.style.gridArea = areas[index];

    // card content...
});