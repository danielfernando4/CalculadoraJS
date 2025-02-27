let btnContainer = document.getElementById("btn-container");
let buttonsContainer = btnContainer.getElementsByTagName("button");

let cleanOneBtn = buttonsContainer[buttonsContainer.length - 1];
let cleanAllBtn = buttonsContainer[buttonsContainer.length - 2];
let equalBtn = buttonsContainer[buttonsContainer.length - 3];

let printField = document.getElementById("result-field");
printField.value = ""

let isAnswer = false;
let isError = false;

window.operationHistorial = [];
window.operationResult = [];

for (let i = 0; i < buttonsContainer.length - 3; i++) {

    
    buttonsContainer[i].addEventListener("click", function() {
        if(isAnswer || isError){
            printField.value = "";
            isAnswer = false;
            isError = false;
        }
        printField.value += this.textContent;
    });
}

cleanAllBtn.addEventListener("click", () => {
    isError = false;
    isAnswer = false;
    printField.value = "";
});


cleanOneBtn.addEventListener("click", () => {
    if(printField.value.length > 0){
        if(isError){
            printField.value = "";
            isError = false;
            isAnswer = false;
        }
        printField.value = printField.value.slice(0, -1);
    }
});


equalBtn.addEventListener("click", () => {
    const regex = /^\d+(\.\d+)?(\s*[-+×÷]\s*\d+(\.\d+)?)*$/;
    //alert(regex.test(printField.value));

    if(regex.test(printField.value)){
        window.operationHistorial.push(printField.value);
        let resultStr = printField.value.replace(/×/g, '*').replace(/÷/g, '/');
        const result = new Function("return " + resultStr);
        printField.value = result();
        window.operationResult.push(printField.value);
        isAnswer = true;
    }else{
        printField.value = "syntax error!!!";
        isError = true;
    }
});