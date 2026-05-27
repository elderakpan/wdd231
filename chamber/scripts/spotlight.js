const container =
    document.querySelector('#spotlight-container');

async function loadSpotlights() {

    try {

        const response =
            await fetch('data/members.json');

        const data =
            await response.json();

        let members =
            data.members.filter(m =>
                m.membership === "Gold" ||
                m.membership === "Silver"
            );

        members =
            members.sort(() => 0.5 - Math.random())
                .slice(0, 3);

        container.innerHTML = "";

        members.forEach(member => {

            const card =
                document.createElement('div');

            card.classList.add('spotlight-card');

            card.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
                <p>${member.membership} Member</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {

        container.innerHTML =
            "<p>Spotlights unavailable</p>";
    }
}

loadSpotlights();