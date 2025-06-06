let colores = ["🔴", "🔵", "🟢", "🟡"];
let secuencia = [];
let rondas = prompt("¿Cuántas rondas quieres jugar? (Deja vacío para jugar hasta fallar)");
let limite = parseInt(rondas);
let ronda = 0;

while (true) {
  ronda++;
  secuencia.push(colores[Math.floor(Math.random() * colores.length)]);
  alert("Secuencia: " + secuencia.join(" "));
  for (let i = 0; i < secuencia.length; i++) {
    let entrada = prompt("Color #" + (i + 1));
    if (entrada !== secuencia[i]) {
      alert("Fallaste. Sobreviviste " + (ronda - 1) + " rondas.");
      ronda = 0;
      secuencia = [];
      throw "Juego terminado.";
    }
  }
  if (!isNaN(limite) && ronda === limite) {
    alert("¡Ganaste! Completaste las " + limite + " rondas. 🏆");
    break;
  }
}
