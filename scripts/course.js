const courses = [
    { code: "WDD130", credits: 3, type: "WDD", completed: true },
    { code: "WDD131", credits: 3, type: "WDD", completed: true },
    { code: "WDD231", credits: 3, type: "WDD", completed: false },
    { code: "CSE110", credits: 2, type: "CSE", completed: true },
    { code: "CSE111", credits: 2, type: "CSE", completed: false }
];

function displayCourses(courseList) {
    const container = document.getElementById("courses");
    container.innerHTML = "";

    courseList.forEach(course => {
        const div = document.createElement("div");
        div.textContent = `${course.code} - ${course.credits} credits`;

        if (course.completed) {
            div.classList.add("completed");
        }

        container.appendChild(div);
    });

    const total = courseList.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("totalCredits").textContent =
        "Total Credits: " + total;
}