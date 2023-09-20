let round = prompt("คุณจะเล่นกี่รอบ ?")
let scoun = 0;
for(var i = 0 ; i < round ; i++){
    var answer = prompt("หัว หรือ ก้อย ")
    var random_answer = "";
    //เวลาใช้ "และ" เงื่อนไขที่ 1 กับ 2 จะต้องเป็นจริงทั้งคู่
    //อย่าลืมใส่()เพราะว่าเป็นfunction
    if(Math.floor(Math.random()*10) <=4){
       //หัว
       random_answer = "หัว"
    }
    else{
        //ก้อย
        random_answer = "ก้อย"
    }

    if(answer == random_answer){
        scoun++;
    }

    var resultText = "รอบที่ " + (i + 1) + ": คุณตอบ " + answer + " คำตอบถูก: " + (answer === random_answer ? "ถูก" : "ผิด");

    // สร้างและเพิ่มข้อความผลลัพธ์ลงใน div ที่มี id เป็น "game-list"
    var resultDiv = document.createElement("div");
    resultDiv.textContent = resultText;
    document.getElementById("game-list").appendChild(resultDiv);
}

// สร้างและแสดงคะแนนรวม
var totalScoreText = "คะแนนรวม: " + scoun;
var totalScoreDiv = document.createElement("div");
totalScoreDiv.textContent = totalScoreText;
document.getElementById("game-list").appendChild(totalScoreDiv);
