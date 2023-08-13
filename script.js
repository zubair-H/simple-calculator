
document.getElementById("subtract").onclick = function () { addToDisplay('-') };

document.getElementById("backspace").onclick = function () { backSpace(); };
document.getElementById("zero").onclick = function () { addToDisplay(0) };
document.getElementById("one").onclick = function () { addToDisplay(1) };
document.getElementById("two").onclick = function () { addToDisplay(2) };

document.getElementById("three").onclick = function () { addToDisplay(3) };
document.getElementById("four").onclick = function () { addToDisplay(4) };
document.getElementById("five").onclick = function () { addToDisplay(5) };

document.getElementById("six").onclick = function () { addToDisplay(6) };
document.getElementById("seven").onclick = function () { addToDisplay(7) };
document.getElementById("eight").onclick = function () { addToDisplay(8) };
document.getElementById("nine").onclick = function () { addToDisplay(9) };

document.getElementById("add").onclick = function () { addToDisplay("+") };
document.getElementById("equals").onclick = function () { evulateExpression(totalValue) }
document.getElementById("reset").onclick = function () { resetButton(); };

document.getElementById("divide").onclick = function () { addToDisplay("/") };
document.getElementById("dot").onclick = function () { addToDisplay(".") };



function addToDisplay(number) {
    if (displayBox.innerText === "0") {
        displayBox.innerText = ""; // Clear initial "0"
    }
    else if (displayBox.innerText.length >= 15) { // to stop the user from typing too much into the displaybox.
        alert("too much input")
        return;
    }
    document.getElementById("displayBox").innerText += number;

    console.log(document.getElementById("displayBox").innerHTML);
    totalValue = document.getElementById("displayBox").innerHTML;


}

function evulateExpression(totalValue) {
    totalValue = eval(totalValue);
    document.getElementById("displayBox").innerHTML = totalValue; // Update displayBox with the result
    console.log(totalValue)
}
function resetButton() {
    totalValue = 0;
    document.getElementById("displayBox").innerHTML = totalValue; // Clear displayBox
    console.log(totalValue)
}
function backSpace() {
    var totalValue = displayBox.innerText
    if (totalValue.length == 1) { // this is to fix erasing everything.
        displayBox.innerText = 0;
    }

    else if (totalValue != 0) {
        totalValue = displayBox.innerText.slice(0, -1);
        displayBox.innerText = totalValue;
    }

}
let parenthesisCounter = 0;
document.getElementById("parenthesis").addEventListener("click", parenthesisFix);

function parenthesisFix() {
    const displayBox = document.getElementById("displayBox");

    if (parenthesisCounter === 0) {
        parenthesisCounter += 1;
        displayBox.innerText += "(";
    } else if (parenthesisCounter === 1) {
        displayBox.innerText += ")";
        parenthesisCounter = 0;
    }

    totalValue = displayBox.innerText; // Update totalValue with the new content

    return totalValue;
}
