let calculator = {}

    calculator.firstTerm = "";
    calculator.secondTerm = "";
    calculator.operator = "";
    calculator.operatorBool = false;
    calculator.secondOperator = "";
    calculator.secondOperatorBool = false;

addEventListener("DOMContentLoaded", (event) => {

    // let displayValue = 0;
    let screen = "";
    let display = document.getElementById("display")

    display.innerHTML = screen

    digits = document.querySelectorAll(".number")
    operators = document.querySelectorAll(".operator")

    for (let i = 0; i < digits.length; i++){
        // Display digit of clicked button. We want to make this the display, and want to save the list of commands we enter
        digits[i].addEventListener('click', function () {
            screen = screen + digits[i].dataset.value
            
            if(calculator.operatorBool == false){
            calculator.firstTerm = screen}
            else{
                calculator.secondTerm = screen
            }
            
            display.innerHTML = screen
        })
    }
    
    for (let i = 0; i < operators.length; i++){
        // Get operator and move on to second number
        operators[i].addEventListener('click', function () {
            if(calculator.firstTerm == ""){
                return false
            }
            screen = ""
            if(calculator.operatorBool == false){
            calculator.operator = operators[i].dataset.value
            calculator.operatorBool = true;}
            else{
                //second operation is hit, this should trigger a calculation AND looking for a second term
                if(calculator.secondOperatorBool == false){
                calculator.secondOperator = operators[i].dataset.value;
                calculator.secondOperatorBool = true;
                calculate(calculator)}
                }
            
            
            display.innerHTML = screen
        })
    }

    //calculate button
    document.getElementById("calculate").addEventListener('click', calculate(calculator))
    //clear button
    document.getElementById("clear").addEventListener('click', function () {
    calculator.firstTerm = "";
    calculator.secondTerm = "";
    calculator.operator = "";
    calculator.operatorBool = false;
    calculator.secondOperator = "";
    display.innerHTML = ""
    screen = ""

    })
    
})

function calculate(obj){
    if(!calculator.secondOperator == ""){
        console.log("we are going in")
    }

}

function add(a, b){
    return a + b
}

function storeTerm(a){
    if(!localStorage.getItem("firstTerm")){
        localStorage.setItem("firstTerm", "0")
    }
    b = localStorage.getItem("firstTerm")
    localStorage.setItem("firstTerm", b + a)
    console.log(localStorage.getItem("firstTerm"))
}