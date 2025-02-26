let btnContainer = document.getElementById("btn-container");
let buttonsContainer = btnContainer.getElementsByTagName("button");

let equalBtn = buttonsContainer[buttonsContainer.length - 1];
let cleanAllBtn = buttonsContainer[buttonsContainer.length - 2];
let cleanOneBtn = buttonsContainer[buttonsContainer.length - 3];

let printField = document.getElementById("result-field");
printField.value = ""

for (let i = 0; i < buttonsContainer.length - 3; i++) {
    buttonsContainer[i].addEventListener("click", function() {
        printField.value += this.textContent;
    });
}

cleanAllBtn.addEventListener("click", () => {
    printField.value = "";
});


cleanOneBtn.addEventListener("click", () => {
    if(printField.value > 0){
        printField.value = printField.value.slice(0, -1);
    }

});
