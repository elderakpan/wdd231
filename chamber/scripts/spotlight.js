const spotlightContainer =
document.querySelector("#spotlight-container");

async function displaySpotlights() {

    const response =
        await fetch("data/members.json");

    const members =
        await response.json();

    const spotlightMembers =
        members.filter(member =>
            member.membership === "Gold" ||
            member.membership === "Silver"
        );

    const shuffled =
        spotlightMembers.sort(() =>
            Math.random() - 0.5
        );

    const selected =
        shuffled.slice(0, 3);

    spotlightContainer.innerHTML = "";

    selected.forEach(member => {

        const card =
            document.createElement("section");

        card.classList.add(
            "spotlight-card"
        );

        card.innerHTML = `
            <img
                src="${member.image}"
                alt="${member.name}">

            <h3>${member.name}</h3>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <p>${member.membership} Member</p>

            <a href="${member.website}">
                Visit Website
            </a>
        `;

        spotlightContainer.appendChild(card);
    });
}

displaySpotlights();