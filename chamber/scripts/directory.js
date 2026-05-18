const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

let membersData = [];

// Fetch JSON (FIXES YOUR ERROR)
async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Unable to load members.json");

        membersData = await response.json();
        displayMembers(membersData);

    } catch (error) {
        membersContainer.innerHTML = `<p>Error loading directory data.</p>`;
        console.error(error);
    }
}

// DISPLAY MEMBERS
function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Membership:</strong> ${member.membership}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
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

// INIT
getMembers();