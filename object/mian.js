/*
object คือตัวแปรที่สามารถเก็บข้อมูลมากกว่า 1ประเภทได้ และจะมีความสามารถอีกคือ +array
*/ 

// let student = {
//     age: 25,
//     name: 'Louis',
//     graded: 'A'
// }
// console.log('age',student.age)
// console.log('name',student.name)
// console.log('graded',student.graded)

let students = [{
    age: 25,
    name: 'Louis',
    graded: 'A'
}, {
    age: 20,
    name: 'Nurat',
    graded: 'B'
}]

students.pop() //เอาออกตัว1

students.push({
    age: 23,
    name: 'Bee',
    graded: 'c'
})

for (let index = 0; index < students.length; index++){
   console.log('Student number: ', (index +1))
    console.log('name',students[index].name)
    console.log('age',students[index].age)
    console.log('graded',students[index].graded)
}


