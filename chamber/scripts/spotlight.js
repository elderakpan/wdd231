const spotlightContainer =
    document.querySelector("#spotlights");

const membersURL =
    "../data/members.json";

async function getMembers() {

    const response =
        await fetch(membersURL);

    const data =
        await response.json();

    displaySpotlights(data.members);
}

function displaySpotlights(members) {

    const qualifiedMembers =
        members.filter(member =>
            member.membership === "Gold" ||
            member.membership === "Silver"
        );

    const randomMembers =
        qualifiedMembers
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    spotlightContainer.innerHTML = "";

    randomMembers.forEach(member => {

        const card =
            document.createElement("section");

        card.classList.add("spotlight");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="${member.image}"
                alt="${member.name} logo"
                loading="lazy"
                width="120"
                height="120">

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <a href="${member.website}"
                target="_blank">
                Visit Website
            </a>

            <p>
                ${member.membership} Member
            </p>
        `;

        spotlightContainer.appendChild(card);

    });
}

getMembers();