// function userClicked () {
//     console.log('button clicked')
// }

// function userClickeDiv () {
//     console.log('button clicked')
// } EventOnClike 2 ตัวอย่าง ผูกกับ button, div


//**ตัวอย่างที่2 Event onchange*/
// function changeGender () { 
//     // เลือก gender ทุก input ออกมา
//     let genderInputs0 = document.querySelectorAll('input[name=gender]')
//     let gender = ''

//     // ใครมี check อยู่ = โดนเลือก
//     for (let i = 0; i < genderInputs0.length; i++) {
//         if (genderInputs0[i].checked) {
//             gender = genderInputs0[i].value
//         }
//     }
//     console.log('selecter gender', gender)
// }

//**ตัวอย่างที่3 Event onkeydown, onkeyup, onkeypress*/
// function changFirstname () {
//     //จิ้มไปยัง input firstsname
//     let firstNameDOM = document.querySelector('input[name=firstname]')
//     //เอา value ของ firstname ออกมา
//     console.log('change firs name', firstNameDOM.value)
// }

//**ตัวอย่างที่4 onmouseover, onmouseup, onmousedown */
// function overItem() {
//     console.log('mouse over')
// }

// function upItem() {
//     console.log('mouse up')
// }

// function downItem() {
//     console.log('mouse down')
// }

//**ตัวอย่างการ bind event ด้วย addEventListener **/
/**ตัวอย่างที่ 1 การเพิ่ม event click*/
// let thisButtomDOM = document.getElementById('thisbuttom')
    
//     thisButtomDOM.addEventListener('click', function () {
//         console.log('ปุ่นที่2 clickd')
//     })

//     function clickItem() {
//     console.log('ปุ่นที่ 1 clicked')
// }