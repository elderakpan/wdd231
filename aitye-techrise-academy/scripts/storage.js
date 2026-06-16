// storage.js

const visitsDisplay = document.querySelector("#visitCount");

let visits = Number(localStorage.getItem("visits-ls")) || 0;

visits++;

localStorage.setItem("visits-ls", visits);

if (visitsDisplay) {
    visitsDisplay.textContent = visits;
}