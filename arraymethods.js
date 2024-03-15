//applying the filter array method in real life

let students= [
    {name: 'student1', score: 95},
    {name: 'student2', score: 47},
    {name: 'student3', score: 74},
    {name: 'student4', score: 39},
    {name: 'student5', score: 85},
    {name: 'student6', score: 92},
    {name: 'student7', score: 90},
    {name: 'student8', score: 65},
    {name: 'student9', score: 15},
    {name: 'student10', score: 99},
    {name: 'student11', score: 91},
    {name: 'student12', score: 82},
    {name: 'student13', score: 32},
    {name: 'student14', score: 75},
    {name: 'student15', score: 87},
    {name: 'student16', score: 45},
    {name: 'student17', score: 25},
    {name: 'student18', score: 75},
    {name: 'student19', score: 74},
    {name: 'student20', score: 14},
];

let maxScore= 75;

let filteredStudents= students.filter((student)=> student.score >=maxScore);
console.log(filteredStudents);
