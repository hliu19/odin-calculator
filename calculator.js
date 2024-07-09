let output = "";
let display = document.getElementById("display");

let number_buttons = document.getElementsByClassName("number");
let action_buttons = document.getElementsByClassName("action");
let operator_buttons = document.getElementsByClassName("operator");

let operator_selected = false;
let current_operator = "";
let operand1 = "";
let operand2 = "";

function appendToDisplay(value) {
    
    //The first number entered should replace the 0
    if (output.length == 1 && output == "0") {
        output = "";
    }

    if (output.length <= 13) {
        if (operator_selected == false) {
            operand1 += value;
            display.innerText = operand1;
        } else {
            operand2 += value;
            display.innerText = operand2;
        }
    }

    console.log("First operand: " + operand1);
    console.log("Second operand: " + operand2);
    console.log("Operator selected: " + operator_selected);
    console.log("Current operator: " + current_operator);
}

function clearDisplay() {
    output = "0";
    display.innerText = output;
    operator_selected = false;
    operand1 = "";
    operand2 = "";
    current_operator = "";
}

function selectOperator(value) {
    
    //If operator is not selected...
    if (operator_selected == false) {
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
        appendToDisplay(button.id);
    });
}

for (const button of action_buttons) {
    switch (button.id) {
        case "clear":
            button.addEventListener("click", () => {
                clearDisplay();
            });
            break;
        default:
            break;
    }
}

for (const button of operator_buttons) {
    button.addEventListener("click", () => {
        selectOperator(button.id);
    });
}
