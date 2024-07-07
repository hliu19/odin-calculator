let output = "";
let display = document.getElementById("display");
let number_buttons = document.getElementsByClassName("number");
let action_buttons = document.getElementsByClassName("action");

function appendToDisplay(value) {
    if (output.length <= 13) {
        output += value;
        display.innerText = output;
    }
}

function clearDisplay() {
    output = "";
    display.innerText = "0";
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




