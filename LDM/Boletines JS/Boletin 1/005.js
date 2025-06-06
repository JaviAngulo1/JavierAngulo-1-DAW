let ingredientes = [];
for (let i = 1; i <= 5; i++) {
  let tiene = prompt(`¿Tienes el ingrediente ${i}? (sí/no)`).toLowerCase();
  if (tiene === "sí") ingredientes.push(true);
  else ingredientes.push(false);
}

let disponibles = ingredientes.filter(x => x).length;
let recetas = [];

if (disponibles >= 2) {
  recetas.push("Tostadas con aguacate");
  recetas.push("Sopa rápida");
}
if (disponibles >= 3) {
  recetas.push("Ensalada mixta");
  recetas.push("Revuelto de verduras");
}
if (disponibles >= 4) {
  recetas.push("Paella vegetal");
  recetas.push("Curry casero");
}
if (disponibles === 5) {
  recetas.push("Lasaña completa");
}

if (recetas.length > 0) {
  alert("Con los ingredientes que tienes puedes cocinar:\n- " + recetas.join("\n- "));
} else {
  alert("No puedes cocinar nada con los ingredientes disponibles 😔");
}
