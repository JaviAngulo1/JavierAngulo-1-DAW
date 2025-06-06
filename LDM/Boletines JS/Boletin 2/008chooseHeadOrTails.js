let contador = 0;
let maximo = 0;

function jugar(eleccionUsuario) {
  if (eleccionUsuario === "SALIR") {
    document.getElementById("resultado").innerText =
      `¡Hasta luego! Tu racha máxima fue de ${maximo} aciertos seguidos.`;
    document.getElementById("contadorActual").innerText = "0";
    return;
  }

  const opciones = ["CARA", "CRUZ"];
  const resultadoAleatorio = opciones[Math.floor(Math.random() * 2)];

  if (eleccionUsuario === resultadoAleatorio) {
    contador++;
    if (contador > maximo) {
      maximo = contador;
    }
    document.getElementById("resultado").innerText = `¡Acertaste! Salió ${resultadoAleatorio}.`;
  } else {
    contador = 0;
    document.getElementById("resultado").innerText = `Fallaste. Salió ${resultadoAleatorio}.`;
  }

  document.getElementById("contadorActual").innerText = contador;
  document.getElementById("maximo").innerText = maximo;
}
