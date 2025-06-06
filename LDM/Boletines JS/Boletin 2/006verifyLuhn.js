function verificar() {
  const input = document.getElementById("numero").value;
  const limpio = input.replace(/[^0-9]/g, ""); // quita guiones o espacios
  const esValido = pasaLuhn(limpio);

  document.getElementById("resultado").innerText = esValido
    ? "✅ El número es válido según Luhn."
    : "❌ El número NO es válido según Luhn.";
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


//prueba con 4012-8888-8888-1881