const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom");
const resetBtn = document.querySelector(".reset")

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function(val) {
    val.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input",tipInputFun);
resetBtn.addEventListener("click", reset);

billInput.value = "0";
peopleInput.value = "1"
tipPerPerson.innerHTML = "$ 0.00";
totalPerPerson.innerHTML = "$ 0.00";

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFun() {
    billValue = parseFloat(billInput.value || "0.0");
    calculateTip()
}

function peopleInputFun(){
    peopleValue = parseFloat(peopleInput.value || "0.0");
    calculateTip()
}

function tipInputFun(){
    tipValue = parseFloat(tipCustom.value || "0.0") / 100;

    tips.forEach(function(val){
        val.classList.remove("active-tip");
    });
    calculateTip();
}

function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove("active-tip");
        if(event.target.innerHTML == val.innerHTML) {
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML) / 100; 
        }
    });
    calculateTip()
}


function calculateTip() {
    if (peopleValue >= 1) {
        const tipAmount = (billValue * tipValue);
        const total = (tipAmount) * peopleValue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }  
}

function reset() {
    billInput.value = "0";
    peopleInput.value = "1";
    tipPerPerson.innerHTML = "$" + "0.0";
    totalPerPerson.innerHTML = "$" + "0.0"; 
    tipCustom.value = "";
}