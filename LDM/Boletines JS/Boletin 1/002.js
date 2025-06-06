// Solicita al usuario que introduzca la cadena de monos y bananas
let entrada = prompt("Ingresa una lista de monos 🐵 y bananas 🍌 (ej: 🐵🍌🍌🍌🐵🍌🐵🍌):");

// Cuenta cuántos monos y bananas hay
let monos = (entrada.match(/🐵/g) || []).length;
let bananas = (entrada.match(/🍌/g) || []).length;

// Pregunta cuántas bananas necesita cada mono
let bananasPorMono = parseInt(prompt("¿Cuántas bananas come cada mono?"), 10);

// Calcula si hay suficientes
let bananasNecesarias = monos * bananasPorMono;

if (bananas >= bananasNecesarias) {
  alert(`¡Sí! Hay suficientes bananas 🍌 para los ${monos} monos 🐵.`);
} else {
  alert("¡Oh no! ¡No hay suficientes bananas para los monos! 😭");
}
