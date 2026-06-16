// footer.js

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent =
        `Last Modified: ${document.lastModified}`;
}