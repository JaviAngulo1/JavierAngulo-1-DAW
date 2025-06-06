let contador = 0;
let maximo = 0;

while (true) {
  let eleccion = prompt("Elige: CARA (🪙), CRUZ (✖️) o SALIR (🚪)").toUpperCase();
  if (eleccion === "SALIR" || eleccion === "🚪") {
    alert("Máxima racha de aciertos seguidos: " + maximo + "\n¡Hasta la próxima!");
    break;
  }

  let resultado = Math.random() < 0.5 ? "CARA" : "CRUZ";

  if (eleccion === resultado || eleccion === "🪙" && resultado === "CARA" || eleccion === "✖️" && resultado === "CRUZ") {
    contador++;
    if (contador > maximo) maximo = contador;
    alert("¡Acertaste! Resultado: " + resultado + "\nRacha actual: " + contador);
  } else {
    alert("Fallaste. Resultado: " + resultado + "\nRacha reiniciada.");
    contador = 0;
  }
}
