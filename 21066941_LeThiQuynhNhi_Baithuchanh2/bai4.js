let height = document.getElementById("height");
let weight = document.getElementById("weight");
let show = document.getElementById("show");
let category = document.getElementById("category");
let calculate = document.getElementById("calculate");
let relode = document.getElementById("relode");

// formula kg/m*m
calculate.addEventListener("click", function () {

    if (height.value == "" && weight.value == "") {
        alert("Please Enter Weight & Height ")
    }
    else {

      let heightInCentimeters = height.value;
      let squareMeter = (heightInCentimeters) ** 2;
      let bmi = parseFloat((weight.value / squareMeter).toFixed(2));
        console.log(bmi);
        document.getElementById("show").innerHTML = "<span style='color: blakc;'>KẾT QUẢ</span><br><span style='color: blue;'>" + bmi + "</span>" ;

        if (bmi < 18.5) {
            document.getElementById("category").innerHTML = "DƯỚI CHUẨN";
        }
        else if (bmi >= 18.5 && bmi < 24.9) {
            document.getElementById("category").innerHTML = "BÌNH THƯỜNG";

        }
        else if (bmi >= 25.0 && bmi < 29.9) {
            document.getElementById("category").innerHTML = "THỪA CÂN";

        } 
        else if (bmi >= 30.0 && bmi < 34.9) {
            document.getElementById("category").innerHTML = "<b>BÉO PHÌ ĐỘ I<br>Khám định kỳ";
        }         
        else if (bmi >= 35.0 && bmi < 39.9) {
          document.getElementById("category").innerHTML = "<b>BÉO PHÌ ĐỘ II<br>Tập thể dục thường xuyên";
        }         
        else {
            document.getElementById("category").innerHTML = "<b>BÉO PHÌ ĐỘ III<br><b>Hạn chế ăn mỡ động vật";

        }
    }
 
})

relode.addEventListener("click", function () {
    window.location.reload()
})