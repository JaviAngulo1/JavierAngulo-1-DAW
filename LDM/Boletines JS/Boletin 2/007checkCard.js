function verificarTarjeta() {
  const input = document.getElementById("numero").value;
  const limpio = input.replace(/[^0-9]/g, ""); // elimina espacios o guiones

  if (!pasaLuhn(limpio)) {
    mostrarResultado("❌ Número inválido según Luhn.");
    return;
  }

  const tipo = obtenerTipoTarjeta(limpio);

  if (tipo === "invalid") {
    mostrarResultado("❌ Número válido pero no corresponde a Visa, MasterCard ni AmEx.");
  } else {
    mostrarResultado(`✅ Tarjeta válida: ${tipo}`);
  }
}

function mostrarResultado(mensaje) {
  document.getElementById("resultado").innerText = mensaje;
}

function pasaLuhn(numero) {
  let suma = 0;
  const digitos = numero.split("").reverse().map(d => parseInt(d));

  for (let i = 0; i < digitos.length; i++) {
    let valor = digitos[i];

    if ((i + 1) % 2 === 0) {
      valor *= 2;
      if (valor > 9) valor -= 9;
    }

    suma += valor;
  }

  return suma % 10 === 0;
}

function obtenerTipoTarjeta(numero) {
  const len = numero.length;

  if (/^3[47]/.test(numero) && len === 15) {
    return "American Express 💳";
  }
  if (/^4/.test(numero) && (len === 13 || len === 16)) {
    return "Visa 💳";
  }
  if (/^5[1-5]/.test(numero) && len === 16) {
    return "MasterCard 💳";
  }

  return "invalid";
}


/*
✅ Ejemplos de prueba
Número tarjeta	Resultado
4111 1111 1111 1111	✅ Visa 💳
378282246310005	✅ American Express 💳
5105-1051-0510-5100	✅ MasterCard 💳
1234 5678 9012 3456	❌ Número inválido según Luhn
6011 1111 1111 1117	❌ Número válido pero no corresponde a tipo soportado
*/