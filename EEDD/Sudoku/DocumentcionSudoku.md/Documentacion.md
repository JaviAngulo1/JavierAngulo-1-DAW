# 🧠 Sudoku Javi

Un completo y robusto juego de Sudoku implementado en Java, con doble interfaz (consola y gráfica), adaptable a distintos niveles de dificultad y desarrollado con buenas prácticas de programación orientada a objetos. Este proyecto busca ofrecer tanto una experiencia divertida como un código mantenible y extensible.

---

## 📑 Índice

- ⚙️ Funcionalidades
- 🧱 Diseño del Sistema
- 🗂️ Estructura del Código
- 🎮 Instrucciones de Juego
- 💻 Cómo Ejecutarlo
- 🖼️ Interfaces Disponibles
- 🧪 Validación y Generación
- 🧩 Personalización
- 📖 Documentación Técnica
- 🏁 Conclusión

---

## ⚙️ Funcionalidades

- 🔁 Interfaz Doble: Soporte para modo consola y GUI con Swing
- 🧩 Tres Dificultades:
  - 🟢 **Fácil**: 51 celdas iniciales (~63%)
  - 🟡 **Medio**: 41 celdas iniciales (~51%)
  - 🔴 **Difícil**: 31 celdas iniciales (~38%)
- 🧠 Generación Aleatoria de Tableros con Backtracking
- ✅ Validación Instantánea de Jugadas
- 🕵️ Comparación con la Solución Correcta
- 🎨 Diferenciación Visual entre Números Fijos y del Usuario

---

## 🧱 Diseño del Sistema

### 🧩 Principios Aplicados

- **Interface Segregation Principle (ISP)**  
  Interfaces específicas para cada funcionalidad del juego.

- **Strategy Pattern**  
  Múltiples validadores implementables para reglas distintas.

- **Modelo-Vista-Controlador (MVC)**  
  Separación clara entre lógica, interfaz y flujo.

---

## 🗂️ Estructura del Código

