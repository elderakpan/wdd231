const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: true },
    { code: "WDD 231", name: "Frontend Development I", credits: 2, completed: false }
];

const container =
    document.querySelector('#course-container');

const total =
    document.querySelector('#total-credits');

function displayCourses(list) {

    container.innerHTML = "";

    let creditSum = 0;

    list.forEach(course => {

        creditSum += course.credits;

        const card =
            document.createElement("div");

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>${course.credits} credits</p>
        `;

        container.appendChild(card);
    });

    total.textContent =
        `Total Credits: ${creditSum}`;
}

displayCourses(courses);