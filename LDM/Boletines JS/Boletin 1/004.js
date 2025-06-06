let diaReal = 6;
let mesReal = 6;
let vidas = 10;
let adivinado = false;

while (vidas > 0 && !adivinado) {
  let dia = parseInt(prompt("Adivina el DÍA de mi cumpleaños (1-31):"), 10);
  let mes = parseInt(prompt("Adivina el MES de mi cumpleaños (1-12):"), 10);

  if (dia === diaReal && mes === mesReal) {
    adivinado = true;
    break;
  } else {
    vidas--;
    alert(`¡Incorrecto! Te quedan ${"💚".repeat(vidas)} (${vidas} vidas)`);
    let seguir = prompt("¿Quieres seguir jugando? (sí/no)").toLowerCase();
    if (seguir !== "sí") break;
  }
}

if (adivinado) {
  alert("¡Has ganado! 🏅");
} else {
  alert("Has perdido 😿 !!!");
}
