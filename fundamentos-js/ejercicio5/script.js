const salida = document.getElementById("resultado");

document.getElementById("boton").addEventListener("click", function () {
  const numero = Number(prompt("Introduce un número:"));
  const tipo = numero % 2 === 0 ? "par" : "impar";
  console.log(numero + " es " + tipo);
  salida.textContent = numero + " es " + tipo;
});
