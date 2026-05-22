document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // footer date safety
    const year = document.querySelector("#currentyear");
    if (year) year.textContent = new Date().getFullYear();

    const modified = document.querySelector("#lastModified");
    if (modified) {
        modified.textContent = document.lastModified;
    }
});