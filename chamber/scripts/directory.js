const container = document.querySelector("#directory-container");
const gridBtn = document.querySelector("#grid-view");
const listBtn = document.querySelector("#list-view");
const searchInput = document.querySelector("#search");

let membersData = [];

// ==============================
// FETCH MEMBERS JSON
// ==============================
async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        membersData = await response.json();

        displayMembers(membersData);

    } catch (error) {
        console.error("Error loading members:", error);
        container.innerHTML = "<p>Unable to load directory data.</p>";
    }
}


// ==============================
// DISPLAY MEMBERS
// ==============================
function displayMembers(members) {
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p><strong>Membership:</strong> ${member.membership}</p>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(card);
    });
}


// ==============================
// VIEW TOGGLES (GRID / LIST)
// ==============================
gridBtn?.addEventListener("click", () => {
    container.classList.add("directory-grid");
    container.classList.remove("directory-list");
});

listBtn?.addEventListener("click", () => {
    container.classList.add("directory-list");
    container.classList.remove("directory-grid");
});


// ==============================
// SEARCH FUNCTION
// ==============================
searchInput?.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = membersData.filter(member =>
        member.name.toLowerCase().includes(value) ||
        member.address.toLowerCase().includes(value) ||
        member.membership.toLowerCase().includes(value)
    );

    displayMembers(filtered);
});


// ==============================
// INIT
// ==============================
getMembers();