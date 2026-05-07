const courses = [
    { code: "WDD 130", credits: 3, completed: true, type: "WDD" },
    { code: "WDD 131", credits: 3, completed: true, type: "WDD" },
    { code: "WDD 231", credits: 3, completed: false, type: "WDD" },
    { code: "CSE 110", credits: 2, completed: true, type: "CSE" },
    { code: "CSE 111", credits: 2, completed: false, type: "CSE" }
];

const container = document.querySelector("#courses");
const totalCredits = document.querySelector("#totalCredits");

function displayCourses(list) {
    container.innerHTML = "";

    list.forEach(course => {
        const card = document.createElement("div");
        card.textContent = `${course.code} (${course.credits} credits)`;

        if (course.completed) {
            card.classList.add("completed");
        }

        container.appendChild(card);
    });

    const total = list.reduce((sum, c) => sum + c.credits, 0);
    totalCredits.textContent = total;
}

// Buttons
document.getElementById("all").onclick = () => displayCourses(courses);
document.getElementById("wdd").onclick = () =>
    displayCourses(courses.filter(c => c.type === "WDD"));
document.getElementById("cse").onclick = () =>
    displayCourses(courses.filter(c => c.type === "CSE"));

// Load all initially
displayCourses(courses);