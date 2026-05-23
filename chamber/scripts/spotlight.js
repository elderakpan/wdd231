const spotlightContainer =
    document.querySelector("#spotlights");

const urlMembers = "data/members.json";

async function getMembers() {

    const response = await fetch(urlMembers);

    const data = await response.json();

    displaySpotlights(data.members);
}

function displaySpotlights(members) {

    const qualified = members.filter(member =>
        member.membership === "Gold" ||
        member.membership === "Silver"
    );

    const randomMembers =
        qualified.sort(() => 0.5 - Math.random())
        .slice(0, 3);

    randomMembers.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("spotlight");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="${member.image}"
                alt="${member.name} logo"
                loading="lazy">

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>

            <p>${member.membership} Member</p>
        `;

        spotlightContainer.appendChild(card);
    });
}

getMembers();