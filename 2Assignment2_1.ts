type Student = [name: string, score: number];

let students: Student[] = [
    ["Ann", 85],
    ["Bob", 72],
    ["John", 55],
    ["Mina", 95]
];

function checkGrade(score: number): string {
    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

for (let student of students) {

    let name = student[0];
    let score = student[1];

    let grade = checkGrade(score);

    console.log(`${name} received ${score} and grade ${grade}`);
}