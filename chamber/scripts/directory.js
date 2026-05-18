const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

// Footer
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Async/Await fetch (REQUIRED)
async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    membersContainer.innerHTML = "<p>Unable to load members.</p>";
  }
}

// Display members
function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="level">${member.membership}</p>
    `;

    membersContainer.appendChild(card);
  });
}

// Grid/List toggle
gridBtn.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");
});

// INIT
loadMembers();