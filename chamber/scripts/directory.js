const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

let membersData = [];

// Fetch JSON data (ASYNC/AWAIT requirement)
async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Failed to load members.json");
        }

        membersData = await response.json();
        displayMembers(membersData);

    } catch (error) {
        membersContainer.innerHTML =
            `<p class="error">Unable to load members data.</p>`;
        console.error(error);
    }
}

// Display members (GRID default)
function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("article");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="${member.image}" 
                 alt="${member.name} logo"
                 loading="lazy"
                 width="300"
                 height="200">

            <h3>${member.name}</h3>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <a href="${member.website}" target="_blank" rel="noopener">
                Visit Website
            </a>

            <p class="membership">
                ${member.membership} Member
            </p>
        `;

        membersContainer.appendChild(card);
    });

    membersContainer.className = "members grid";
}

// GRID VIEW
gridBtn.addEventListener("click", () => {
    membersContainer.classList.remove("list");
    membersContainer.classList.add("grid");
});

// LIST VIEW
listBtn.addEventListener("click", () => {
    membersContainer.classList.remove("grid");
    membersContainer.classList.add("list");
});

// Run on load
getMembers();