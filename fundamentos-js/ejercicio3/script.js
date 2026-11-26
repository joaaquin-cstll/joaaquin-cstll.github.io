const salida = document.getElementById("resultado");

const persona = {
  nombre: "Lucía",
  edad: 21,
  altura: 1.65,
  esEstudiante: true,
  telefono: null,
  aficiones: ["senderismo", "lectura"],
  direccion: { calle: "Calle Real 12", ciudad: "Granada" },
  saludar: function () {
    return "Hola, soy " + this.nombre;
  }
};

console.log(persona);
console.table(persona);
console.table(persona.aficiones);
console.table(persona.direccion);

salida.textContent = JSON.stringify(persona, null, 2) + "\n" + persona.saludar();
