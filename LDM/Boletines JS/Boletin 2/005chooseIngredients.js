function mostrarRecetas() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const seleccionados = [];

  checkboxes.forEach(chk => {
    if (chk.checked) {
      seleccionados.push(chk.value);
    }
  });

  const recetas = obtenerRecetas(seleccionados);
  const contenedor = document.getElementById("resultado");

  if (recetas.length === 0) {
    contenedor.innerHTML = "❌ No tienes suficientes ingredientes para ninguna receta.";
  } else {
    contenedor.innerHTML = `<p>✅ Con tus ingredientes puedes preparar:</p><ul>${recetas.map(r => `<li>${r}</li>`).join("")}</ul>`;
  }
}

function obtenerRecetas(ingredientes) {
  const total = ingredientes.length;
  const posibles = [];

  if (total >= 2) {
    if (incluye(["pan", "queso"], ingredientes)) posibles.push("Sandwich de queso 🧀🍞");
    if (incluye(["huevo", "pan"], ingredientes)) posibles.push("Tostadas francesas 🍞🥚");
  }
  if (total >= 3) {
    if (incluye(["pan", "queso", "jamón"], ingredientes)) posibles.push("Sandwich mixto 🥪");
    if (incluye(["huevo", "tomate", "queso"], ingredientes)) posibles.push("Omelette con tomate 🍳🍅");
  }
  if (total >= 4) {
    if (incluye(["pan", "huevo", "queso", "jamón"], ingredientes)) posibles.push("Croque-monsieur 🧀🍖🍞");
    if (incluye(["huevo", "tomate", "jamón", "queso"], ingredientes)) posibles.push("Huevos rellenos con jamón 🍳🍖");
  }
  if (total === 5) {
    if (incluye(["pan", "huevo", "queso", "tomate", "jamón"], ingredientes)) posibles.push("Mega sandwich completo 🥪🍅🍳");
  }

  return posibles;
}

// Verifica si todos los ingredientes requeridos están presentes
function incluye(ingredientesRequeridos, disponibles) {
  return ingredientesRequeridos.every(ing => disponibles.includes(ing));
}
