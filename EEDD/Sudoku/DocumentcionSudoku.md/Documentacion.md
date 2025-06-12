# 🧠 Sudoku Javi

Un completo y robusto juego de Sudoku implementado en Java, con doble interfaz (consola y gráfica), adaptable a distintos niveles de dificultad y desarrollado con buenas prácticas de programación orientada a objetos. Este proyecto busca ofrecer tanto una experiencia divertida como un código mantenible y extensible.

---

## 📑 Índice

- [⚙️ Funcionalidades](#️-funcionalidades)
- [🧱 Diseño del Sistema](#-diseño-del-sistema)
- [🗂️ Estructura del Código](#️-estructura-del-código)
- [🎮 Instrucciones de Juego](#-instrucciones-de-juego)
- [💻 Cómo Ejecutarlo](#-cómo-ejecutarlo)
- [🖼️ Interfaces Disponibles](#️-interfaces-disponibles)
- [🧪 Validación y Generación](#-validación-y-generación)
- [🧩 Personalización](#-personalización)
- [📖 Documentación Técnica](#-documentación-técnica)
- [🏁 Conclusión](#-conclusión)

---

## ⚙️ Funcionalidades

- 🔁 Interfaz Doble: Soporte para modo consola y GUI con Swing  
- 🧩 Tres niveles de dificultad:
  - 🟢 Fácil: 51 celdas (~63% del tablero)
  - 🟡 Medio: 41 celdas (~51%)
  - 🔴 Difícil: 31 celdas (~38%)
- 🧠 Generación aleatoria de tableros válidos con algoritmo de backtracking
- ✅ Validación automática de jugadas
- 🔍 Comparación con la solución para verificar el progreso
- 🎨 Diferenciación visual entre números dados y del usuario

---

## 🧱 Diseño del Sistema

### Principios de diseño aplicados

- **Interface Segregation Principle** – Interfaces separadas según responsabilidad.
- **Strategy Pattern** – Para validadores intercambiables de Sudoku.
- **Modelo Vista Controlador (MVC)** – Separación clara entre interfaz, lógica y control.

---

## 🗂️ Estructura del Código

```plaintext
src/
├── consola/
│   ├── ISudoku.java
│   ├── ISudokuResuelto.java
│   ├── IValidadorSudoku.java
│   ├── puntoMatriz.java
│   ├── Sudoku.java
│   ├── SudokuConsola.java
│   ├── SudokuResuelto.java
│   └── ValidadorSudoku.java
└── interfazGrafica/
    ├── DifficultyPanel.java
    ├── GamePanel.java
    ├── IControladorJuego.java
    ├── NumberSelectionPanel.java
    ├── PanelReemplazable.java
    └── SudokuGUI.java
