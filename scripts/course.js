const courses = [{
        code: 'WDD 130',
        credits: 3,
        completed: true
    },
    {
        code: 'WDD 131',
        credits: 3,
        completed: true
    },
    {
        code: 'CSE 110',
        credits: 2,
        completed: false
    }
];

const totalCredits = courses.reduce(
    (sum, course) => sum + course.credits,
    0
);

document.querySelector('#credits').textContent =
    `Total Credits: ${totalCredits}`;