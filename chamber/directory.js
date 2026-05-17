const container = document.getElementById("members");
const toggleBtn = document.getElementById("toggle");

let gridView = true;

// REQUIRED async/await fetch
async function loadMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit</a></p>
      <p>Level: ${member.level}</p>
    `;

    container.appendChild(card);
  });
}

// Toggle grid/list
toggleBtn.addEventListener("click", () => {
  gridView = !gridView;

  if (gridView) {
    container.classList.add("grid");
    container.classList.remove("list");
  } else {
    container.classList.add("list");
    container.classList.remove("grid");
  }
});

// Footer dates (REQUIRED)
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("modified").textContent = document.lastModified;

// Run
loadMembers();