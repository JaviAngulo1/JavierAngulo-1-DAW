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
src/
├── consola/
│ ├── ISudoku.java
│ ├── ISudokuResuelto.java
│ ├── IValidadorSudoku.java
│ ├── puntoMatriz.java
│ ├── Sudoku.java
│ ├── SudokuConsola.java
│ ├── SudokuResuelto.java
│ └── ValidadorSudoku.java
└── interfazGrafica/
├── DifficultyPanel.java
├── GamePanel.java
├── IControladorJuego.java
├── NumberSelectionPanel.java
├── PanelReemplazable.java
└── SudokuGUI.java

---
### 🔍 Reglas del Sudoku

- Cada fila debe contener los números del 1 al 9 sin repetir.
- Cada columna debe cumplir lo mismo.
- Cada subcuadro 3x3 debe ser único.

### 📌 Cómo se Juega

1. Selecciona un nivel de dificultad.
2. Observa el tablero generado.
3. Haz clic en una celda vacía o introduce coordenadas (modo texto).
4. Introduce un número del 1 al 9.
5. El sistema te informará si es correcto o no.
6. ¡Completa el tablero para ganar!

---

### ✅ Requisitos Previos

- Java 8 o superior
- Un IDE como IntelliJ IDEA o Eclipse (opcional)

### 🚀 Compilación Manual

```bash
git clone [URL_DEL_REPOSITORIO]
cd sudoku-javi
javac -d out src/consola/*.java src/interfazGrafica/*.java


