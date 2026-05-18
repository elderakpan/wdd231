const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

async function loadMembers() {
    try {
        const response = await fetch("./data/members.json"); // FIXED PATH
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        membersContainer.innerHTML = "<p>Failed to load members.</p>";
        console.error(error);
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>${member.membership}</p>
            <a href="${member.website}" target="_blank">Visit Site</a>
        `;

        membersContainer.appendChild(card);
    });
}

// GRID / LIST TOGGLE
gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

loadMembers();