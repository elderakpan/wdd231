const spotlightContainer =
    document.querySelector("#spotlights");

async function getSpotlights() {

    const response =
        await fetch("data/members.json");

    const data = await response.json();

    const filteredMembers =
        data.members.filter(member =>
            member.membership === "Gold" ||
            member.membership === "Silver"
        );

    const randomMembers =
        filteredMembers.sort(() => 0.5 - Math.random())
        .slice(0, 3);

    displaySpotlights(randomMembers);
}

function displaySpotlights(members) {

    members.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("spotlight");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="${member.image}"
                alt="${member.name} logo">

            <p>${member.phone}</p>

            <p>${member.address}</p>

            <p>
                Membership:
                ${member.membership}
            </p>

            <a href="${member.website}"
                target="_blank">
                Visit Website
            </a>
        `;

        spotlightContainer.appendChild(card);
    });

}

getSpotlights();