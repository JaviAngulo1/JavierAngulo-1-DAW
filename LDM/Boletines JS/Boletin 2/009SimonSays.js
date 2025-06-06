const colores = ["rojo", "verde", "amarillo"];
let secuencia = [];
let entradaUsuario = [];
let ronda = 1;
let rondasMax = null;
let bloqueado = false;

function iniciarJuego() {
  const input = document.getElementById("rondas").value;
  rondasMax = input ? parseInt(input) : null;

  secuencia = [];
  entradaUsuario = [];
  ronda = 1;

  document.getElementById("mensaje").innerText = "";
  document.getElementById("config").style.display = "none";
  document.getElementById("juego").style.display = "block";

  nuevaRonda();
}

function nuevaRonda() {
  entradaUsuario = [];
  const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  secuencia.push(nuevoColor);

  document.getElementById("rondaActual").innerText = `Ronda ${ronda}`;
  reproducirSecuencia();
}

function reproducirSecuencia() {
  bloqueado = true;
  let i = 0;

  const interval = setInterval(() => {
    if (i >= secuencia.length) {
      clearInterval(interval);
      bloqueado = false;
      return;
    }

    const color = secuencia[i];
    const btn = document.getElementById(color);
    btn.classList.add("active");

    setTimeout(() => {
      btn.classList.remove("active");
    }, 500);

    i++;
  }, 800);
}

function ingresarColor(color) {
  if (bloqueado) return;

  entradaUsuario.push(color);
  const index = entradaUsuario.length - 1;

  if (entradaUsuario[index] !== secuencia[index]) {
    terminarJuego(false);
    return;
  }

  if (entradaUsuario.length === secuencia.length) {
    if (rondasMax && ronda === rondasMax) {
      terminarJuego(true);
    } else {
      ronda++;
      setTimeout(nuevaRonda, 1000);
    }
  }
}

function terminarJuego(victoria) {
  const mensaje = victoria
    ? `🎉 ¡Ganaste! Superaste las ${rondasMax} rondas.`
    : `❌ Fallaste. Sobreviviste ${ronda - 1} rondas.`;

  document.getElementById("mensaje").innerText = mensaje;
  document.getElementById("juego").style.display = "none";
  document.getElementById("config").style.display = "block";
}
