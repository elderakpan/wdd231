const menuButton = document.querySelector('#menu-button');

const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {

    navigation.classList.toggle('open');

    const expanded =
        menuButton.getAttribute('aria-expanded') === 'true';

    menuButton.setAttribute('aria-expanded', !expanded);
});

/* FOOTER */

document.querySelector('#currentyear').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modified: ${document.lastModified}`;