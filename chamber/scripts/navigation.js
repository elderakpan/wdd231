const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const open = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", open);
    menuButton.textContent = open ? "✖" : "☰";
});