let vidaJugador = 100;
let vidaMonstruo = 100;
let pociones = 3;
let maxAtaqueJugador = 20;
let maxAtaqueMonstruo = 15;
let maxCuracionPocion = 30;

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (true) {
  let accion = prompt(
    "Elige una acción:\n1) ATACAR MONSTRUO\n2) TOMAR POCION\n3) BUSCAR POCION\n4) SALIR"
  );

  if (accion === "4") {
    alert("¡Has salido del juego!");
    break;
  }

  if (accion === "1") {
    let ataque = aleatorio(1, maxAtaqueJugador);
    vidaMonstruo -= ataque;
    alert(`Atacas al monstruo y le haces ${ataque} puntos de daño.`);
  } else if (accion === "2") {
    if (pociones > 0) {
      let curacion = aleatorio(1, maxCuracionPocion);
      vidaJugador += curacion;
      pociones--;
      alert(`Usas una poción y recuperas ${curacion} de vida. Pociones restantes: ${pociones}`);
    } else {
      alert("No te quedan pociones.");
      continue;
    }
  } else if (accion === "3") {
    let chance = aleatorio(1, 4);
    if (chance === 1) {
      pociones++;
      alert("¡Has encontrado una poción! Ahora tienes " + pociones + " pociones.");
    } else {
      alert("No encontraste nada.");
    }
  } else {
    alert("Opción inválida.");
    continue;
  }

  if (vidaMonstruo <= 0) {
    alert("¡Has derrotado al monstruo! 🏆");
    break;
  }

  let ataqueMonstruo = aleatorio(1, maxAtaqueMonstruo);
  vidaJugador -= ataqueMonstruo;
  alert(`El monstruo te ataca y te hace ${ataqueMonstruo} puntos de daño.`);

  if (vidaJugador <= 0) {
    alert("¡Has sido derrotado por el monstruo! 😿");
    break;
  }

  alert(`Estado actual:\nJugador ❤️: ${vidaJugador}\nMonstruo 💜: ${vidaMonstruo}\nPociones 🧪: ${pociones}`);
}
