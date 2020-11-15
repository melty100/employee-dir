
export var employeeData = [
    {
        firstName: 'James',
        lastName: "Smith",
        title: 'Intern',
        salary: 30000
    },
    {
        firstName: 'John',
        lastName: 'Snow',
        title: 'HR Analyst',
        salary: 50000
    },
    {
        firstName: 'Anniya',
        lastName: 'Knox',
        title: 'HR Manager',
        salary: 100000
    },
    {
        firstName: 'Fynn',
        lastName: 'Nash',
        title: 'Training Manager',
        salary: 85000
    },
    {
        firstName: 'Eben',
        lastName: 'Combs',
        title: 'Benefits Manager',
        salary: 87500
    },
    {
        firstName: 'Tara',
        lastName: 'Hyde',
        title: 'Compensation Manager',
        salary: 90000
    },
    {
        firstName: 'Hibba',
        lastName: 'Walters',
        title: 'Regional Human Resource Manager',
        salary: 200000
    },
    {
        firstName: 'Selina',
        lastName: 'Morrow',
        title: 'Recruiter',
        salary: 50000
    },
    {
        firstName: 'Sorcha',
        lastName: 'Person',
        title: 'HR Coordinator',
        salary: 64000
    }
];

export function compare(key) {

    return function (a, b) {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;

        return 0;
    }
};

export function compareTitle(a, b) {
    if (a.title > b.title) return 1;
    if (b.title < b.title) return -1;

    return 0;
};

export function compareSalary(a, b) {
    if (a.salary > b.salary) return 1;
    if (b.salary < b.salary) return -1;

    return 0;
};