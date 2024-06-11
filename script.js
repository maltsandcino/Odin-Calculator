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
        }
        if((targ == "*" || targ == "+" || targ == "-" || targ == "%") && calculator.operatorBool == false){
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
    

    if(!a.secondOperator == ""){
        console.log("we are going in")
    }

    if(calculator.operator == "+"){
        console.log("adding")
        let sum = add(parseInt(a.firstTerm), parseInt(a.secondTerm))
        console.log(sum)
        let display = document.getElementById("display");
        display.innerHTML = sum
    }

}

function add(a, b){
    console.log(a)
    console.log(b)
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