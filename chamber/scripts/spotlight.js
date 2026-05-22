const container = document.querySelector("#spotlight-container");
const url = "data/members.json";

async function loadMembers() {
    const res = await fetch(url);
    const members = await res.json();

    const eligible = members.filter(m =>
        m.membership === "Gold" || m.membership === "Silver"
    );

    const shuffled = eligible.sort(() => Math.random() - 0.5);

    const selected = shuffled.slice(0, 3);

    container.innerHTML = "";

    selected.forEach(m => {
        const card = document.createElement("section");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${m.name}</h3>

            <img src="${m.image}" alt="${m.name} logo" loading="lazy">

            <p>${m.address}</p>
            <p>${m.phone}</p>

            <a href="${m.website}" target="_blank" rel="noopener noreferrer">
                Visit Website
            </a>

            <p><strong>${m.membership}</strong> Member</p>
        `;

        container.appendChild(card);
    });
}

loadMembers();