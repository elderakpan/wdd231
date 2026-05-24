const spotlightContainer =
    document.querySelector('#spotlight-container');

async function getSpotlights() {

    try {

        const response =
            await fetch('data/members.json');

        if (!response.ok) {
            throw new Error('Member data not found');
        }

        const data =
            await response.json();

        displaySpotlights(data.members);

    } catch (error) {

        console.error(
            'Spotlight Error:',
            error
        );
    }
}

function displaySpotlights(members) {

    const premiumMembers =
        members.filter(member =>
            member.membership === 'Gold' ||
            member.membership === 'Silver'
        );

    const shuffledMembers =
        premiumMembers.sort(() => 0.5 - Math.random());

    const selectedMembers =
        shuffledMembers.slice(0, 3);

    spotlightContainer.innerHTML = '';

    selectedMembers.forEach(member => {

        const card =
            document.createElement('section');

        card.classList.add('spotlight-card');

        card.innerHTML = `
            <img src="${member.image}"
                alt="${member.name} logo"
                loading="lazy"
                width="100"
                height="100">

            <h3>${member.name}</h3>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <p>
                <a href="${member.website}"
                    target="_blank"
                    rel="noopener noreferrer">
                    Visit Website
                </a>
            </p>

            <p>
                Membership Level:
                ${member.membership}
            </p>
        `;

        spotlightContainer.appendChild(card);
    });
}

getSpotlights();