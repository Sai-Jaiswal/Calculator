let displayResult = document.querySelector("#displayResult");
let btn = document.querySelectorAll(".btn");
let result = "";
let actionBtnText = ["CE", "C", "="]
// let operators = ["％", "√", "-", "÷", "x", "+"]


for (const i in btn) {
    btn[i].addEventListener("click", (e) => {

        if (!actionBtnText.includes(btn[i].textContent)) {
            if (displayResult.textContent.length < 20) {
                displayResult.textContent += btn[i].textContent;
                if (btn[i].textContent == "÷") {
                    result += "/";
                } else if (btn[i].textContent == "x") {
                    result += "*";
                } else {
                    result += btn[i].textContent
                }
            } else {
                alert("Maximum character reached!!")
            }
        } else {

            // Main Actions Performance Here
            if (btn[i].textContent == "CE") {
                result = delLastChar(result);
            } else if (btn[i].textContent == "C") {
                result = "";
            } else {
                result = calculateResult(result);
            }
            displayResult.textContent = result;
        }
    })
}


function delLastChar(result) {
    return result.substring(0, result.length - 1);
}

function calculateResult(result) {
    try {

        // Handles Square root
        let sqrNum = result[result.indexOf("√") + 1];
        sqRoot = Math.sqrt(sqrNum);
        sol = result.replace("√" + sqrNum, sqRoot)

        // Handles Percentage Symbol

        return eval(sol).toString();
    } catch (e) {
        return "Invalid Operation"
    }
}