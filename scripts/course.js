const courses = [{
        subject: 'WDD',
        number: 130,
        credits: 3,
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        credits: 3,
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        credits: 3,
        completed: false
    },
    {
        subject: 'CSE',
        number: 110,
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        credits: 2,
        completed: false
    }
];

const container = document.querySelector('#course-container');

const credits = document.querySelector('#credits');

function displayCourses(courseList) {

    container.innerHTML = '';

    courseList.forEach(course => {

        const courseCard = document.createElement('div');

        courseCard.classList.add('course');

        if (course.completed) {
            courseCard.classList.add('completed');
        }

        courseCard.innerHTML =
            `${course.subject} ${course.number}`;

        container.appendChild(courseCard);
    });

    const totalCredits = courseList.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    credits.textContent =
        `Total Credits: ${totalCredits}`;
}

displayCourses(courses);

document.querySelector('#all-btn')
    .addEventListener('click', () => {
        displayCourses(courses);
    });

document.querySelector('#wdd-btn')
    .addEventListener('click', () => {

        const wddCourses = courses.filter(course =>
            course.subject === 'WDD'
        );

        displayCourses(wddCourses);
    });

document.querySelector('#cse-btn')
    .addEventListener('click', () => {

        const cseCourses = courses.filter(course =>
            course.subject === 'CSE'
        );

        displayCourses(cseCourses);
    });