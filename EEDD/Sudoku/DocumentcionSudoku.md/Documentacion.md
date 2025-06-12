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

- 🔁 Interfaz doble: consola y gráfica (Swing).
- 🧩 Tres niveles de dificultad:
  - 🟢 Fácil: 51 celdas visibles
  - 🟡 Medio: 41 celdas visibles
  - 🔴 Difícil: 31 celdas visibles
- 🧠 Generación de tableros válidos con algoritmo de backtracking.
- ✅ Validación automática de jugadas.
- 🔍 Comparación con la solución del tablero.
- 🎨 Colores diferenciados entre números originales y del usuario.

---

## 🧱 Diseño del Sistema

- **Principios SOLID aplicados**.
- Uso de interfaces (`ISudoku`, `IValidadorSudoku`, etc.).
- Separación clara entre lógica del juego y presentación (consola/GUI).
- Modularidad para facilitar testeo y mantenimiento.

---

## 🗂️ Estructura del Código

```
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
```

---

## 🎮 Instrucciones de Juego

### Reglas del Sudoku

- Cada fila debe contener los números del 1 al 9 sin repetir.
- Cada columna debe contener los números del 1 al 9 sin repetir.
- Cada subcuadro de 3x3 debe tener valores únicos.

### Cómo jugar

1. Selecciona dificultad.
2. Se genera un tablero automáticamente.
3. Introduce números por consola o GUI.
4. El sistema valida cada jugada.
5. Termina el juego cuando completes el tablero correctamente.

---

## 💻 Cómo Ejecutarlo

### Requisitos

- Java 8 o superior.

### Compilación

```bash
javac -d out src/consola/*.java src/interfazGrafica/*.java
```

### Ejecución

#### Modo consola

```bash
java -cp out consola.SudokuConsola
```

#### Modo gráfico (GUI Swing)

```bash
java -cp out interfazGrafica.SudokuGUI
```

---

## 🖼️ Interfaces Disponibles

### 🖥️ Consola

- Tablero ASCII visible en consola.
- El usuario introduce coordenadas (fila y columna) y el número deseado.
- Verificación de movimientos válida/inválida.
- Interfaz textual clara y sencilla para avanzar.

```text
+-------+-------+-------+
| 5 3 . | . 7 . | . . . |
| 6 . . | 1 9 5 | . . . |
| . 9 8 | . . . | . 6 . |
+-------+-------+-------+
| 8 . . | . 6 . | . . 3 |
| 4 . . | 8 . 3 | . . 1 |
| 7 . . | . 2 . | . . 6 |
+-------+-------+-------+
| . 6 . | . . . | 2 8 . |
| . . . | 4 1 9 | . . 5 |
| . . . | . 8 . | . 7 9 |
+-------+-------+-------+
```

### 🖱️ Gráfica (Swing)

- Pantalla inicial de selección de dificultad.
- Tablero interactivo con celdas clicables.
- Diálogo para seleccionar número.
- Diferenciación visual:
  - 🔵 Números añadidos por el jugador.
  - ⚫ Números del tablero original.
  - 🟥 Indicación si el número rompe las reglas.

---

## 🧪 Validación y Generación

### Generación del tablero

- Se crean bloques 3x3 diagonales con números aleatorios.
- Se completa el resto del tablero con algoritmo de backtracking.
- Se ocultan celdas según nivel de dificultad.

### Validación

- Verificación de movimientos mediante `ValidadorSudoku`.
- Comparación con solución interna completa.
- Prevención de repeticiones en filas, columnas o bloques.

---

## 🧩 Personalización

### Cambiar dificultad (Sudoku.java)

```java
switch (dificultadNormalizada) {
    case "facil":   celdasARellenar = 51; break;
    case "medio":   celdasARellenar = 41; break;
    case "dificil": celdasARellenar = 31; break;
}
```

### Añadir nuevos validadores

Crea nuevas clases que implementen `IValidadorSudoku` para personalizar la lógica de validación.

---

## 📖 Documentación Técnica

### Interfaces Clave

#### `ISudoku.java`

```java
void rellenarNumSudoku(puntoMatriz xy, int valor);
boolean validarNumSudoku(puntoMatriz xy, int valor);
int[][] getSudokuUsuario();
void rellenarDesdeSolucion(String dificultad, ISudokuResuelto solucion);
```

#### `IValidadorSudoku.java`

```java
boolean comprobarNumeroCorrecto(puntoMatriz xy, int valor, ISudokuResuelto solucion);
boolean validarNumSudoku(puntoMatriz xy, int valor, int[][] sudoku);
```

#### `ISudokuResuelto.java`

```java
int[][] getSudoku();
void resolverSudoku();
```

#### `IControladorJuego.java`

```java
void startGame(String difficulty);
void showNumberSelectionDialog(puntoMatriz cell);
void processNumberSelection(int number);
void showDifficultyPanel();
```

---

## 🏁 Conclusión

Este proyecto representa una integración completa entre lógica algorítmica y experiencia de usuario, con estructuras limpias y principios sólidos de programación. Sudoku Javi demuestra cómo un juego clásico puede convertirse en un ejercicio ideal para aprender Java, validación, diseño modular y desarrollo de interfaces.

---

👨‍💻 Desarrollado por **Javier Angulo**, 1º DAW · Sevilla, 2025.
