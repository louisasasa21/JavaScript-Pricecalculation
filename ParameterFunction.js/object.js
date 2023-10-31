/*
objiect function
*/ 

let students = [
    {
        name: 'Louis',
        score: 34,
        grade: 'A'
    },
    {
        name: 'Nurat',
        score: 24,
        grade: 'B'  
    },
    {
        name: 'Nu',
        score: 60,
        grade: 'B'  
    }
]

let student = students.find((s) => {
    if (s.name == 'Nurat') {
        return true
    }
})

// let doublescore_student = students.map((s) => {
//     s.score = s.score *2 
//     return s
// })

let hinghScore_student = students.filter((s) => {
    if (s.score >= 30) {
        return true
    }
}) /*/ เหตุเพราะว่า filter ทำการดักเอาไว้ส่าถ้า score >= 30 จะทำการ return ค่าจริงออกไป ดั้งนั่นเลยออกมา แค่ 0
    0:{name: 'Louis', score: 34, grade: 'A'}
    1: {name: 'Nu', score: 60, grade: 'B'}
    length:2 */

console.log('student: ', student)
console.log('hinghScore_student: ', hinghScore_student)

// console.log('doublescore_student: ', doublescore_student)