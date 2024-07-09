let output = "";
let display = document.getElementById("display");

let number_buttons = document.getElementsByClassName("number");
let action_buttons = document.getElementsByClassName("action");
let operator_buttons = document.getElementsByClassName("operator");

let operator_selected = false;
let current_operator = "";
let operand1 = "";
let operand2 = "";

function evaluate() {

    //Parse operands to numbers
    let result = 0;
    let firstOperand = parseFloat(operand1);
    let secondOperand = parseFloat(operand2);

    //Only evaluate if both operands have been entered
    if (operand2 != "") {
        console.log("Attempting to evaluate: " + firstOperand + " " + current_operator + " " + secondOperand);
        switch (current_operator) {
            case "+":
                result = firstOperand + secondOperand;
                break;
            case "-":
                result = firstOperand - secondOperand;
                break;
            case "*":
                result = firstOperand * secondOperand;
                break;
            case "/":
                result = firstOperand / secondOperand;
                break;
            case "%":
                result = firstOperand % secondOperand;
                break;
            default:
                console.log("Invalid operator: " + current_operator);
                break;
        }

        //Display result
        displayValue(result, true);
        clearExpression();
    }
}

function displayValue(value, displayResult = false) {
    
    //The first number entered should replace the 0
    if (output.length == 1 && output == "0") {
        output = "";
    }

    //If a result is to be displayed, display result but do not assign number to operands.
    if (displayResult) {
        //Set character limit to 13
        if (value.length > 13) {
            value = value.substring(0, 13);
        }
        display.innerText = value;
        console.log("Result displayed: " + value);
    } else {
        if (output.length <= 13) {
            //If an operator is not selected, store number as first operand
            if (operator_selected == false) {
                operand1 += value;
                display.innerText = operand1;
            } else {
                operand2 += value;
                display.innerText = operand2;
            }
        }
        console.log("First operand: " + operand1);
        console.log("Operator: " + current_operator);
        console.log("Second operand: " + operand2);   
    }
}

function clearDisplay() {
    output = "0";
    display.innerText = output;
}

function clearExpression() {
    operator_selected = false;
    operand1 = "";
    operand2 = "";
    current_operator = "";
}

function selectOperator(value) {
    //Select an operator only if an operator is not already selected and first operand has been entered
    if (operator_selected == false && operand1 != "") {
        operator_selected = true;
        switch (value) {
            case "add":
                current_operator = "+";
                break;
            case "subtract":
                current_operator = "-";
                break;
            case "multiply":
                current_operator = "*";
                break;
            case "divide":
                current_operator = "/";
                break;
            case "modulus":
                current_operator = "%";
                break;
            default:
                break;
        }
    }
}

for (const button of number_buttons) {
    button.addEventListener("click", () => {
        displayValue(button.id);
    });
}

for (const button of action_buttons) {
    switch (button.id) {
        case "clear":
            button.addEventListener("click", () => {
                clearDisplay();
                clearExpression();
            });
            break;
        case "equals":
            button.addEventListener("click", () => {
                evaluate();
            })
        default:
            break;
    }
}

for (const button of operator_buttons) {
    button.addEventListener("click", () => {
        selectOperator(button.id);
    });
}