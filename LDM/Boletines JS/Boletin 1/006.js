function verificarLuhn(numero) {
  let digitos = numero.replace(/\D/g, "").split("").map(Number).reverse();
  for (let i = 1; i < digitos.length; i += 2) {
    digitos[i] *= 2;
    if (digitos[i] > 9) digitos[i] -= 9;
  }
  let suma = digitos.reduce((a, b) => a + b, 0);
  return suma % 10 === 0;
}

let numero = prompt("Ingresa el número a verificar:");
if (verificarLuhn(numero)) {
  alert("✅ El número es válido según el algoritmo de Luhn.");
} else {
  alert("❌ El número NO es válido según el algoritmo de Luhn.");
}
