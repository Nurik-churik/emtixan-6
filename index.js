
let School = {
    name: "Amjlt syber school",
    phoneNumber: "+7 707 777 07 77",
    students: [
        { studentName: "Али", top: "А", progress: 85, lessons: 2 },
        { studentName: "Бота", top: "В", progress: 90, lessons: 2 },
        { studentName: "Санжар", top: "С", progress: 78, lessons: 2 },
        { studentName: "Дана", top: "А", progress: 88, lessons: 2 },
        { studentName: "Ербол", top: "В", progress: 92, lessons: 2 },
    ],
};


function changeSchoolName() {
    let newName = prompt("Жаңа оқу орталығының атауын енгізіңіз:");
    if (newName) {
        School.name = newName;
        alert(`Оқу орталығының атауы "${School.name}" болып өзгертілді.`);
    }
}


function changePhoneNumber() {
    let newPhoneNumber = prompt("Жаңа телефон нөмірін енгізіңіз:");
    if (newPhoneNumber) {
        School.phoneNumber = newPhoneNumber;
        alert(`Телефон нөмірі "${School.phoneNumber}" болып жаңартылды.`);
    } else {
        alert(`Телефон нөмірі өзгеріссіз қалды: "${School.phoneNumber}".`);
    }
}



let students = [
    { name: "Алихан", averageScore: 85, subjectsCount: 5, group: "A" },
    { name: "Мадина", averageScore: 90, subjectsCount: 4, group: "B" },
    { name: "Еркебұлан", averageScore: 75, subjectsCount: 6, group: "A" }
];


function listStudentNames() {
    let names = students.map(student => student.name).join("\n");
    alert("Студенттердің тізімі:\n" + names);
}


function addStudent() {
    let name = prompt("Студенттің атын енгізіңіз:");
    let averageScore = parseFloat(prompt("Орташа үлгерімін енгізіңіз:"));
    let subjectsCount = parseInt(prompt("Сабақ санын енгізіңіз:"), 10);
    let group = prompt("Тобын енгізіңіз:");

    if (!isNaN(averageScore) && !isNaN(subjectsCount)) {
        students.push({ name, averageScore, subjectsCount, group });
        alert(`${name} студенті сәтті қосылды!`);
    } else {
        alert("Дұрыс мәндерді енгізіңіз!");
    }
}


function applyDecreaseToTop() {
    let groupName = prompt("Орташа үлгерімін өзгертуге арналған топты енгізіңіз:");
    let percentage = parseFloat(prompt("Қанша пайызға төмендету керектігін енгізіңіз:"));

    if (!isNaN(percentage)) {
        students.forEach(student => {
            if (student.group === groupName) {
                student.averageScore -= student.averageScore * (percentage / 100);
            }
        });
        alert(`"${groupName}" тобының студенттерінің орташа үлгерімі ${percentage}% төмендетілді.`);
    } else {
        alert("Дұрыс пайыздық мән енгізіңіз!");
    }
}

