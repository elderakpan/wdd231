const container = document.querySelector("#directory-container");
const gridBtn = document.querySelector("#grid-view");
const listBtn = document.querySelector("#list-view");

const url = "data/members.json";

async function getMembers() {
    const response = await fetch(url);
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {

    container.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="${member.image}"
                 alt="${member.name} logo"
                 loading="lazy">

            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>

            <a href="${member.website}" target="_blank" rel="noopener noreferrer">
                Visit Website
            </a>

            <p><strong>Membership:</strong> ${member.membership}</p>
        `;

        container.appendChild(card);
    });
}

/* VIEW SWITCH */
gridBtn.addEventListener("click", () => {
    container.classList.add("directory-grid");
    container.classList.remove("directory-list");
});

listBtn.addEventListener("click", () => {
    container.classList.add("directory-list");
    container.classList.remove("directory-grid");
});

getMembers();