const salida = document.getElementById("resultado");

const numeros = [];
for (let i = 0; i < 100; i++) {
  numeros.push(Math.floor(Math.random() * 101));
}
console.table(numeros);
salida.textContent = "Array: " + numeros.join(", ");

document.getElementById("boton").addEventListener("click", function () {
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);
  const filtrados = numeros.filter(n => n >= min && n <= max);
  console.table(filtrados);
  salida.textContent = "Array: " + numeros.join(", ") + "\n\nEntre " + min + " y " + max + ": " + filtrados.join(", ");
});
