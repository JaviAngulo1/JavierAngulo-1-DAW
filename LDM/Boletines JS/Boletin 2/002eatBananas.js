/*
Crear un programa que permita ingresar una lista de (monos) y
(bananas). Preguntar luego cuántas bananas come cada mono. Mostrar en un
mensaje si hay suficientes bananas para cada mono. Ejemplo:
// Ingresar monos y bananas:
// Cuántas bananas come cada mono?: en este caso 2 bananas , 2 bananas y 1
banana, es decir, no se comparten, pero todos se comen alguna.
//o en caso de que no haya suficientes:
// ¡Oh no!¡No hay suficientes bananas para los monos!
*/

function pedirBananasPorMono() {
      const cantidadMonos = parseInt(document.getElementById("monos").value);
      const contenedor = document.getElementById("formularioBananas");
      contenedor.innerHTML = ""; // limpiar

      if (isNaN(cantidadMonos) || cantidadMonos < 1) {
        alert("Por favor, introduce un número válido de monos.");
        return;
      }

      for (let i = 1; i <= cantidadMonos; i++) {
        contenedor.innerHTML += `
          <label for="mono${i}">¿Cuántas bananas come el mono ${i}?</label>
          <input type="number" id="mono${i}" min="0"><br>
        `;
      }

      contenedor.innerHTML += `<button onclick="calcularBananas(${cantidadMonos})">Verificar bananas</button>`;
    }

    function calcularBananas(cantidadMonos) {
      const cantidadBananas = parseInt(document.getElementById("bananas").value);
      let totalNecesarias = 0;

      for (let i = 1; i <= cantidadMonos; i++) {
        const valor = parseInt(document.getElementById(`mono${i}`).value);
        if (isNaN(valor) || valor < 0) {
          alert(`Ingresa una cantidad válida de bananas para el mono ${i}.`);
          return;
        }
        totalNecesarias += valor;
      }

      const resultado = document.getElementById("resultado");
      if (totalNecesarias <= cantidadBananas) {
        resultado.textContent = "¡Todos los monos tienen sus bananas! 🍌";
        resultado.style.color = "green";
      } else {
        resultado.textContent = "¡Oh no! ¡No hay suficientes bananas para los monos! 😢";
        resultado.style.color = "red";
      }
    }




/*
//Ejercicio por terminal
const readline = require("readline");

// Creamos la interfaz de entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cantidadMonos = 0;
let cantidadBananas = 0;
let bananasNecesarias = 0;
let contador = 0;

function preguntarMonosYBananas() {
  rl.question("¿Cuántos monos hay? ", (monos) => {
    cantidadMonos = parseInt(monos);

    rl.question("¿Cuántas bananas hay en total? ", (bananas) => {
      cantidadBananas = parseInt(bananas);
      preguntarBananaPorMono();
    });
  });
}

function preguntarBananaPorMono() {
  if (contador < cantidadMonos) {
    rl.question(`¿Cuántas bananas come el mono ${contador + 1}? `, (res) => {
      bananasNecesarias += parseInt(res);
      contador++;
      preguntarBananaPorMono(); // Llamada recursiva
    });
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  console.log("\n--- Resultado ---");
  if (bananasNecesarias <= cantidadBananas) {
    console.log("¡Todos los monos tienen sus bananas! 🍌");
  } else {
    console.log("¡Oh no! ¡No hay suficientes bananas para los monos! 😢");
  }
  rl.close();
}

// Iniciar el programa
preguntarMonosYBananas();*/

