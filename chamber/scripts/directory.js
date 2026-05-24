const url = 'data/members.json';

const membersContainer = document.querySelector('#members');

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data);
}

function displayMembers(members) {

    members.forEach(member => {

        const card = document.createElement('article');

        card.classList.add('member-card');

        card.innerHTML = `
            <img src="${member.image}" 
                 alt="${member.name} logo"
                 loading="lazy">

            <h2>${member.name}</h2>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>

            <p>
                <strong>Membership Level:</strong>
                ${member.membership}
            </p>
        `;

        membersContainer.appendChild(card);
    });
}

getMembers();

const gridBtn = document.querySelector('#gridBtn');

const listBtn = document.querySelector('#listBtn');

gridBtn.addEventListener('click', () => {

    membersContainer.classList.add('grid-view');

    membersContainer.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {

    membersContainer.classList.add('list-view');

    membersContainer.classList.remove('grid-view');
});

document.querySelector('#currentyear').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modification: ${document.lastModified}`;