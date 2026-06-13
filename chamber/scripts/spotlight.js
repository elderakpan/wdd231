const container = document.querySelector("#spotlight-container");
const membersURL = "data/members.json";

async function loadSpotlights() {
    try {
        const members = await fetch(membersURL).then(r => r.json());

        const qualified = members.filter(m =>
            m.membership === "Gold" ||
            m.membership === "Silver"
        );

        const shuffled = qualified.sort(() => Math.random() - 0.5);

        const selected = shuffled.slice(0, 3);

        container.innerHTML = "";

        selected.forEach(m => {
            const card = document.createElement("article");
            card.classList.add("spotlight-card");

            card.innerHTML = `
                <h3>${m.name}</h3>

                <img src="${m.image}"
                     alt="${m.name} logo"
                     loading="lazy">

                <p><strong>${m.phone}</strong></p>
                <p>${m.address}</p>

                <a href="${m.website}" target="_blank" rel="noopener">
                    Visit Website
                </a>

                <p class="membership">${m.membership} Member</p>
            `;

            container.appendChild(card);
        });

    } catch (err) {
        console.error("Spotlight error:", err);
    }
}

loadSpotlights();