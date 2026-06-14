import { places } from "../data/discover.mjs";

const container = document.querySelector("#cards");
const messageBox = document.querySelector("#visit-message");

/* -------------------------------
   VISITOR MESSAGE (localStorage)
--------------------------------*/
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
        message = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${diffDays} days ago.`;
    }
}

messageBox.textContent = message;
localStorage.setItem("lastVisit", now);

/* -------------------------------
   BUILD CARDS
--------------------------------*/
places.forEach((place, index) => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.style.gridArea = `item${index + 1}`;

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img src="${place.image}" alt="${place.name}" loading="lazy">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button>Learn More</button>
    `;

    container.appendChild(card);
});