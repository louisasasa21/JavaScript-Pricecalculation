/*
array
*/

let age1 =40
let age2 =50
let age3 =60

let ages = [40, 50, 60] //Array 3 items

console.log('new age', ages[1])
console.log('age list', ages)

//**Array มีวิธืเปลี่ยนแปลงได้ทั้งหมด 3วิธี */

//1.แทนที่
ages = [40, 50]
console.log('age list', ages)

//2. ต่อ array
ages.push(60)
console.log('age list', ages)

ages.pop(60)
console.log('age list', ages)

 