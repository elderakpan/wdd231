const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");
    });
}