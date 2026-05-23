const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const lastModified =
    document.querySelector("#lastModified");

lastModified.textContent =
    `Last Modified: ${document.lastModified}`;