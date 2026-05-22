/* ---------- HAMBURGER MENU ---------- */

const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});

/* ---------- FOOTER ---------- */

document.querySelector('#currentyear').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modified: ${document.lastModified}`;