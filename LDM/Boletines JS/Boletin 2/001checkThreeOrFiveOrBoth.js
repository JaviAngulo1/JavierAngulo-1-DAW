/*
Escribe un script que muestre por consola los
números de 1 a 100 (ambos incluidos y con un salto de línea entre cada
impresión), sustituyendo los siguientes:
• Múltiplos de 3 por la palabra "miel" o .
• Múltiplos de 5 por la palabra "oso" o .
• Múltiplos de 3 y de 5 a la vez por la palabra "meloso" 
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("meloso");
  } else if (i % 3 === 0) {
    console.log("miel");
  } else if (i % 5 === 0) {
    console.log("oso");
  } else {
    console.log(i);
  }
}


/*
function mostrarNumeros() {
      const salida = document.getElementById("salida");
      salida.innerHTML = ""; // Limpiar antes de imprimir

      for (let i = 1; i <= 100; i++) {
        let texto = "";
        let clase = "";

        if (i % 3 === 0 && i % 5 === 0) {
          texto = "meloso";
          clase = "meloso";
        } else if (i % 3 === 0) {
          texto = "miel";
          clase = "miel";
        } else if (i % 5 === 0) {
          texto = "oso";
          clase = "oso";
        } else {
          texto = i;
        }

        salida.innerHTML += `<div class="linea ${clase}">${texto}</div>`;
      }
    }
*/