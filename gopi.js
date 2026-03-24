let display = document.getElementById("display");

// value சேர்க்க
function append(value) {
    display.value += value;
}

// clear செய்ய
function clearDisplay() {
    display.value = "";
}

// square function
function square() {
    let num = parseFloat(display.value);
    display.value = num * num;
}

// calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}