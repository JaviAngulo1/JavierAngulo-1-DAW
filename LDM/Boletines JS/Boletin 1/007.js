function verificarLuhn(numero) {
  let soloDigitos = "";
  for (let i = 0; i < numero.length; i++) {
    let c = numero[i];
    if (c >= "0" && c <= "9") {
      soloDigitos += c;
    }
  }

  let digitos = [];
  for (let i = 0; i < soloDigitos.length; i++) {
    digitos.push(parseInt(soloDigitos[i], 10));
  }
  digitos.reverse();

  for (let i = 1; i < digitos.length; i += 2) {
    digitos[i] = digitos[i] * 2;
    if (digitos[i] > 9) {
      digitos[i] = digitos[i] - 9;
    }
  }

  let suma = 0;
  for (let i = 0; i < digitos.length; i++) {
    suma += digitos[i];
  }

  return (suma % 10) === 0;
}

function tipoTarjeta(numero) {
  let soloDigitos = "";
  for (let i = 0; i < numero.length; i++) {
    let c = numero[i];
    if (c >= "0" && c <= "9") {
      soloDigitos += c;
    }
  }

  if (!verificarLuhn(soloDigitos)) {
    return "❌ invalid";
  }

  let length = soloDigitos.length;

  // American Express: 15 dígitos, empieza por 34 o 37
  if (length === 15 && (soloDigitos.startsWith("34") || soloDigitos.startsWith("37"))) {
    return "💳 American Express ✅";
  }

  // Visa: 13 o 16 dígitos, empieza por 4
  if ((length === 13 || length === 16) && soloDigitos.startsWith("4")) {
    return "💳 Visa ✅";
  }

  // MasterCard: 16 dígitos, empieza por 51-55
  if (length === 16) {
    let prefix = parseInt(soloDigitos.substring(0, 2), 10);
    if (prefix >= 51 && prefix <= 55) {
      return "💳 MasterCard ✅";
    }
  }

  return "❌ invalid";
}

let numero = prompt("Ingresa el número de tarjeta:");
alert(tipoTarjeta(numero));
