let qrt = prompt("จำนวนสินค้า")
let sum = 0
for(var i = 1; i <=  qrt; i++)
{
    let item_price = prompt("ราคาสินค้าชิ้นที่" +i)
    sum = sum + parseInt(item_price)  
    document.getElementById("paice-list").innerHTML += "รายการสินค้าชิ้นที่"+ i + ":"+ item_price +" บาท" + "<br>"  //การใส่ += ในที่นี้คือการเพิ่มข้อมูลต่อจากเดมไปดรื่อยๆ
}
document.getElementById("result").innerHTML = "ราคารวม" + sumgit init
