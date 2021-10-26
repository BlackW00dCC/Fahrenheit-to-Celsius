function ftoc (){
    var fahren = prompt ("กรอกข้อมูลหน่ายเป็น fahren")
    var celsi = 32, celsi_sum
    celsi_sum = (fahren - celsi)*5/9
    document.getElementById("out_p2").innerHTML = +fahren +" Fahrenheit "+" Equal "+ celsi_sum.toFixed(3)+ " celsius";
}

ftoc()

