const numbers = [1, -2, 3, 0, -5]

const negativeNumbers = numbers.filter ((item) => item < 0)
console.log(negativeNumbers)
const sumOfNegative = negativeNumbers.reduce ((item1, item2) => item1 + item2);
console.log(sumOfNegative)

const it_department_employees = [
    {
    name: 'Roman',
    salary: 1200
    },
    {
    name: 'Aijan',
    salary: 2000
    },
    {
    name: 'Asel',
    salary: 8000
    },
    {
    name: 'Timur',
    salary: 2100
    },
    {
    name: 'Altynai',
    salary: 300
    }
    ]

function sumOfSalary (arr) {
    return arr[0].salary + arr[1].salary + 
    arr[2].salary + arr[3].salary + arr[4].salary
};

function middleSalary () {
    return sumOfSalary(it_department_employees) / it_department_employees.length
}

console.log("Общая Зарплата:", sumOfSalary(it_department_employees),
            "Среднаяя Зарплата:", middleSalary());

            