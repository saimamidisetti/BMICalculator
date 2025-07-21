let weightError = document.getElementById("weightError");
let heightError = document.getElementById("heightError");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let bmiBtn = document.getElementById("calculate");
let resetBtn = document.getElementById("reset");
let results = document.getElementById("results");

bmiBtn.addEventListener("click", function(){
    let weightVal = parseFloat(weight.value);
    let heightVal = parseFloat(height.value) / 100;
    if (weight.value === "" || weightVal <= 0){
        weightError.textContent = "Enter Valid Weight";
    }
    else if (height.value === "" || heightVal <= 0){
        heightError.textContent = "Enter Valid Weight";
    }
    else{
        let bmi = weightVal / (heightVal * heightVal);
        let category = "";
        let color = "";
        heightError.textContent = "";
        weightError.textContent = "";
        if (bmi < 18.5) {
            category = "UnderWeight";
            color = "bg-yellow-300 text-black";
        } else if (bmi < 24.9) {
            category = "Normal Weight";
            color = "bg-green-500 text-white";
        } else if (bmi < 29.9) {
            category = "OverWeight";
            color = "bg-orange-400 text-white";
        } else {
            category = "Obese";
            color = "bg-red-500 text-white";
        }
        results.textContent = `Your BMI is ${bmi.toFixed(1)} - ${category}`;
        results.className = `mt-4 p-4 rounded ${color}`;
        resetBtn.classList.remove("hidden")
    }
    
    
})
resetBtn.addEventListener("click", function () {
  weight.value = "";
  height.value = "";
  weightError.textContent = "";
  heightError.textContent = "";
  results.textContent = "";
  results.className = "";
  results.className = "hidden";
});