let comida = prompt("¿Vas a almorzar o cenar? (almorzar/cenar)").toLowerCase();
let esVegetariano = prompt("¿Eres vegetariano? (sí/no)").toLowerCase();

if (comida === "almorzar" && esVegetariano === "sí") {
  alert("Te recomendamos una ensalada 🥗");
} else if (comida === "almorzar" && esVegetariano === "no") {
  alert("Te recomendamos unos fideos 🍝");
} else if (comida === "cenar" && esVegetariano === "sí") {
  alert("Te recomendamos un wrap vegetal 🥙");
} else if (comida === "cenar" && esVegetariano === "no") {
  alert("Te recomendamos sushi 🍣");
} else {
  alert("Opción no válida.");
}
