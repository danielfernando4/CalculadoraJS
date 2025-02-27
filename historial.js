let btnHistorial = document.getElementById("btn-historial");
let historialContainer = document.getElementById("historial-container");
let btnCerrar = document.getElementById("btn-cerrar-historial");
let operationContainer = document.getElementById("operation-container");



btnHistorial.addEventListener("click", () => {
    
    historialContainer.style.display = "flex";
    operationContainer.innerHTML = "";
    
    //alert(window.operationHistorial)
    //alert(window.operationHistorial.length)

    for(let i=0; i<window.operationHistorial.length; i++){
        let newOperation = document.createElement("div");
        newOperation.classList.add("item");
        newOperation.textContent = window.operationHistorial[i];

        let newResult = document.createElement("div");
        newResult.classList.add("item");
        newResult.textContent = window.operationResult[i];

        operationContainer.appendChild(newOperation);
        operationContainer.appendChild(newResult);
    }
});

btnCerrar.addEventListener("click", () => {
    historialContainer.style.display = "none";
});