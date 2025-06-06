let vidaJugador = 100;
let vidaMonstruo = 100;
let pociones = 3;

const ataqueMaxJugador = 20;
const ataqueMaxMonstruo = 15;
const curacionMaxPocion = 25;

let juegoTerminado = false;

function mostrarEstado(mensajeExtra = "") {
  const estado = document.getElementById("estado");
  estado.innerText = `❤️ Vida jugador: ${vidaJugador}
👾 Vida monstruo: ${vidaMonstruo}
🧪 Pociones: ${pociones}

${mensajeExtra}`;
}

function ataqueMonstruo() {
  if (vidaMonstruo <= 0) return;

  const daño = Math.floor(Math.random() * ataqueMaxMonstruo) + 1;
  vidaJugador -= daño;

  if (vidaJugador <= 0) {
    vidaJugador = 0;
    mostrarEstado(`😈 El monstruo te atacó e hizo ${daño} de daño.\n❌ ¡Has perdido!`);
    juegoTerminado = true;
  } else {
    mostrarEstado(`😈 El monstruo te atacó e hizo ${daño} de daño.`);
  }
}

function atacar() {
  if (juegoTerminado) return;

  const daño = Math.floor(Math.random() * ataqueMaxJugador) + 1;
  vidaMonstruo -= daño;

  if (vidaMonstruo <= 0) {
    vidaMonstruo = 0;
    mostrarEstado(`⚔️ Atacaste al monstruo e hiciste ${daño} de daño.\n🎉 ¡Has vencido al monstruo!`);
    juegoTerminado = true;
    return;
  }

  mostrarEstado(`⚔️ Atacaste al monstruo e hiciste ${daño} de daño.`);
  setTimeout(ataqueMonstruo, 500);
}

function usarPocion() {
  if (juegoTerminado) return;

  if (pociones <= 0) {
    mostrarEstado("❌ No te quedan pociones.");
    return;
  }

  const curacion = Math.floor(Math.random() * curacionMaxPocion) + 1;
  vidaJugador += curacion;
  pociones--;

  mostrarEstado(`🩺 Usaste una poción y recuperaste ${curacion} de vida.`);
  setTimeout(ataqueMonstruo, 500);
}

function buscarPocion() {
  if (juegoTerminado) return;

  const resultado = Math.floor(Math.random() * 4) + 1;

  if (resultado === 1) {
    pociones++;
    mostrarEstado("🔍 Encontraste una poción extra. 🧪");
  } else {
    mostrarEstado("🔍 Buscaste una poción, pero no encontraste nada.");
  }

  setTimeout(ataqueMonstruo, 500);
}

function salir() {
  if (juegoTerminado) return;

  mostrarEstado("👋 Te has retirado del combate.");
  juegoTerminado = true;
}
