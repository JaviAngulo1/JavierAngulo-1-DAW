/*
003 chooseVegetarian.js/.html
Recomendación de comida
• Crear un programa que pregunte si va el usuario va a almorzar o cenar, y si es vegetariano o no.
Dependiendo de las respuestas,debe recomendar un plato (es decir, debe haber cuatro platos posibles). 
*/

const comida = prompt("¿Vas a almorzar o cenar? (a/c)").toLowerCase();
const esVegetariano = prompt("¿Eres vegetariano? (si/no)").toLowerCase();

let plato;

    if (comida === "a" && esVegetariano === "si") {
      plato = "Ensalada de quinoa con aguacate 🥗";
    } else if (comida === "a" && esVegetariano === "no") {
      plato = "Pollo a la plancha con arroz 🍗";
    } else if (comida === "c" && esVegetariano === "si") {
      plato = "Sopa de lentejas con pan integral 🍲";
    } else if (comida === "c" && esVegetariano === "no") {
      plato = "Pescado al horno con vegetales 🐟";
    } else {
      plato = "Entrada no válida.";
    }

    alert("Te recomendamos: " + plato);




/*
//Adaptación al ejercicio por terminal
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let comida = "";
let esVegetariano = "";

rl.question("¿Vas a almorzar o cenar? (almuerzo/cena): ", (tipoComida) => {
  comida = tipoComida.toLowerCase();

  rl.question("¿Eres vegetariano? (sí/no): ", (respuesta) => {
    esVegetariano = respuesta.toLowerCase();

    let plato;

    if (comida === "almuerzo" && esVegetariano === "sí") {
      plato = "Ensalada de quinoa con aguacate 🥗";
    } else if (comida === "almuerzo" && esVegetariano === "no") {
      plato = "Pollo a la plancha con arroz 🍗";
    } else if (comida === "cena" && esVegetariano === "sí") {
      plato = "Sopa de lentejas con pan integral 🍲";
    } else if (comida === "cena" && esVegetariano === "no") {
      plato = "Pescado al horno con vegetales 🐟";
    } else {
      plato = "Entrada no válida.";
    }

    console.log(`\n👉 Recomendación: ${plato}`);
    rl.close();
  });
});
*/