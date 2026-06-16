// programs.js

const programs = [
    {
        name: "Web Development",
        description: "Learn HTML, CSS, JavaScript, and responsive web design."
    },
    {
        name: "Software Engineering",
        description: "Build applications using modern programming practices."
    },
    {
        name: "Cybersecurity",
        description: "Protect systems, networks, and data from cyber threats."
    },
    {
        name: "Data Analytics",
        description: "Analyze and visualize data to support decision-making."
    }
];

const programsContainer = document.querySelector("#programsContainer");

if (programsContainer) {
    programs.forEach(program => {
        const card = document.createElement("section");

        card.classList.add("program-card");

        card.innerHTML = `
            <h3>${program.name}</h3>
            <p>${program.description}</p>
        `;

        programsContainer.appendChild(card);
    });
}