const salida = document.getElementById("resultado");

let nombre = "Ana";
let edad = 25;
let altura = 1.68;
let esEstudiante = true;
let sinValor;
let vacio = null;
let lista = [1, 2, 3];
let objeto = { curso: "DAW" };

let texto = "";
const variables = { nombre, edad, altura, esEstudiante, sinValor, vacio, lista, objeto };
for (const clave in variables) {
  console.log(clave, variables[clave], typeof variables[clave]);
  texto += clave + ": " + typeof variables[clave] + "\n";
}
console.info("Mensaje informativo");
console.error("Mensaje de error");
console.debug("Mensaje de depuración");

salida.textContent = texto;
