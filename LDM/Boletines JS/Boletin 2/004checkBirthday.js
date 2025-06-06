const cumpleDia = 18;
const cumpleMes = 11;
let vidas = 10;
let juegoTerminado = false;

function intentar() {
  if (juegoTerminado) return;

  const dia = parseInt(document.getElementById("dia").value);
  const mes = parseInt(document.getElementById("mes").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(dia) || isNaN(mes)) {
    resultado.innerText = "⚠️ Ingresa ambos valores válidos.";
    return;
  }

  if (dia === cumpleDia && mes === cumpleMes) {
    resultado.innerText = "🎉 ¡Has adivinado mi cumpleaños! ¡Has ganado!";
    juegoTerminado = true;
    return;
  }

  vidas--;
  document.getElementById("vidas").innerText = vidas;

  let mensaje = "❌ No adivinaste. ";

  if (dia === cumpleDia) mensaje += "✅ Día correcto. ";
  else mensaje += "❌ Día incorrecto. ";

  if (mes === cumpleMes) mensaje += "✅ Mes correcto. ";
  else mensaje += "❌ Mes incorrecto. ";

  if (vidas === 0) {
    mensaje += "\n😢 Te quedaste sin vidas. Has perdido.";
    juegoTerminado = true;
  } else {
    mensaje += "\n¿Quieres seguir intentando?";
  }

  resultado.innerText = mensaje;
}
