document.querySelector(".test").addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    alert("click en el botón");
});

/*document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("menu contextual esta invertido");
});*/

window.addEventListener("click", function (event) {
    console.log("hemos hecho click em la ventana de la web");
});