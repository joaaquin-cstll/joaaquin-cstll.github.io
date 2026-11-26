const salida = document.getElementById("resultado");

document.getElementById("boton").addEventListener("click", function () {
  const a = Number(prompt("Primer número:"));
  const b = Number(prompt("Segundo número:"));
  const suma = a + b;
  console.log("La suma es", suma);
  salida.textContent = a + " + " + b + " = " + suma;
});
