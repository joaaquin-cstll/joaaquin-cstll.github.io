// Array de 100 números del 1 al 200
const numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 200) + 1);

// 2. Mostrar array
console.log("--- Array completo ---");
console.table(numeros);

// 3. Filtrar por números del 50 al 150
const minimo = 50;
const maximo = 150;
const numerosFiltrados = numeros.filter(num => num >= minimo && num <= maximo);

// 4. Mostrar número filtrados
console.log(`--- Números filtrados en el rango [${minimo} - ${maximo}] (${numerosFiltrados.length} encontrados) ---`);
console.table(numerosFiltrados);