let calculator = {}

    calculator.firstTerm = "";
    calculator.secondTerm = "";
    calculator.operator = "";
    calculator.operatorBool = false;
    calculator.operated = false;
    calculator.secondOperator = "";
    calculator.secondOperatorBool = false;

addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("numbers").addEventListener('click', function (event){
        
        let targ = event.target.dataset.value;
        let screen = document.getElementById("display");

        if(!isNaN(targ)){
            if(calculator.operatorBool == false){
                calculator.firstTerm = calculator.firstTerm += targ
                screen.innerHTML = calculator.firstTerm
            }
            if(calculator.operatorBool == true){
                calculator.secondTerm = calculator.secondTerm += targ
                screen.innerHTML = calculator.secondTerm
            }
        }
        if(targ == "clear"){
            calculator.firstTerm = "";
            calculator.secondTerm = "";
            calculator.operator = "";
            calculator.operatorBool = false;
            calculator.operated = false;
            calculator.secondOperator = "";
            calculator.secondOperatorBool = false;
            screen.innerHTML = calculator.firstTerm
        }
        if(targ == "=" && (!calculator.firstTerm == "") && (!calculator.secondTerm == "")){
            console.log(targ)
            calculate(calculator)
            calculator.operated = true;
        }
        if((targ == "*" || targ == "+" || targ == "-" || targ == "÷") && calculator.operatorBool == true){
            calculator.secondOperatorBool = true;
           
            let temp = calculate(calculator);
            calculator.firstTerm = temp;
            screen.innerHTML = temp;
            calculator.operator = targ
            calculator.secondTerm = ""
        }
        if((targ == "*" || targ == "+" || targ == "-" || targ == "÷") && calculator.operatorBool == false){
            calculator.operator = targ;
            calculator.operatorBool = true;
            screen.innerHTML = targ;
        }

    })
    
})

function clear(){
    console.log("clear")
    calculator.firstTerm = "";
    calculator.secondTerm = "";
    calculator.operator = "";
    calculator.operatorBool = false;
    calculator.secondOperator = "";
    display.innerHTML = ""
    screen = ""
}

function calculate(a){
    console.log("calculate")
    display = document.getElementById("display");
    let sum;
    
    if(calculator.operator == "+"){
        sum = add(parseFloat(a.firstTerm), parseFloat(a.secondTerm))
        display.innerHTML = sum
    }
    if(calculator.operator == "-"){
        sum = sub(parseFloat(a.firstTerm), parseFloat(a.secondTerm))
        display.innerHTML = sum
    }
    if(calculator.operator == "*"){
        sum = mult(parseFloat(a.firstTerm), parseFloat(a.secondTerm))
        display.innerHTML = sum
    }
    if(calculator.operator == "÷"){
        sum = div(parseFloat(a.firstTerm), parseFloat(a.secondTerm))
        display.innerHTML = sum
    }
    if(calculator.secondOperatorBool == false){
    calculator.firstTerm = sum;
    calculator.secondTerm = "";
    calculator.operator = "";
    calculator.operatorBool = false;}

    return sum

}

function add(a, b){
    return a + b
}

function mult(a, b){
    return a * b
}

function sub(a, b){
    return a - b
}

function div(a, b){
    return a / b
}