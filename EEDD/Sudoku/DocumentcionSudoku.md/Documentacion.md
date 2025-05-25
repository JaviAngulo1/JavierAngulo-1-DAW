# Documentación del Proyecto de Sudoku en Java
**Autor:** Javier Angulo  
**Curso:** Desarrollo de Aplicaciones Web  

---

## 1. Introducción

Este proyecto consiste en hacer un juego de Sudoku utilizando Java. La idea principal es que funcione desde la consola, sin cosas raras como interfaces gráficas. El usuario puede elegir entre tres niveles de dificultad (fácil, medio y difícil) y tiene que ir metiendo los números poco a poco hasta completar el tablero. El programa revisa si el número que metes está bien o mal según las reglas del Sudoku, y además es capaz de resolver el tablero automáticamente usando un algoritmo que va probando hasta que encaja todo (backtracking).  
Todo el código está hecho usando programación orientada a objetos para que esté bien organizado, y también he puesto control de errores por si se mete algo que no tiene sentido.

---

## 2. Estructura del Proyecto

El proyecto está dividido en varias clases para que sea más fácil de mantener y entender. A continuación, explico para qué sirve cada una:

- **`Main`**: Es la clase que arranca el programa. Aquí es donde se pide al usuario la dificultad, se muestra el tablero, y se le pregunta qué número quiere meter y dónde.
  
- **`SudokuTablero`**: Es la clase más importante. Aquí está todo lo relacionado con el tablero: se crea el tablero con huecos según la dificultad, se comprueba si un movimiento es válido o no, se puede resolver el tablero entero con un algoritmo, y se puede mostrar por consola.

- **`SudokuException`** (opcional): Es una clase para controlar errores específicos del Sudoku, como cuando metes algo que no se puede meter. No es obligatoria, pero ayuda a que el código sea más limpio.

---

## 3. Generación del Tablero

Dependiendo de la dificultad que elija el usuario, se genera un tablero de Sudoku que ya tiene algunos números puestos y otros huecos. La estructura del tablero siempre es una matriz de 9x9, como en cualquier Sudoku normal. Lo que cambia es cuántos huecos tiene:

- **Fácil**: Tiene menos huecos, o sea que hay más pistas puestas, y por tanto es más fácil de completar.
- **Medio**: Tiene un equilibrio entre números puestos y huecos.
- **Difícil**: Hay muy pocos números puestos y la mayoría están vacíos, por lo que cuesta más pensar los movimientos.

Esto se hace generando primero un tablero completo que cumple todas las reglas del Sudoku, y después se le van quitando números según la dificultad elegida.

---

## 4. Validación de Jugadas

Cuando el jugador mete un número en una posición concreta, el programa revisa si ese número es válido según las reglas del Sudoku. Básicamente, no se puede repetir el mismo número en la misma fila, ni en la misma columna, ni en el mismo bloque de 3x3.  
Si el número no cumple las reglas, el programa le dice al usuario que ese movimiento no vale, y le deja intentarlo otra vez. Esta parte es muy importante porque sin esto se podría poner cualquier cosa y entonces ya no sería un Sudoku de verdad.

---

## 5. Resolución del Tablero (Backtracking)

Para resolver el tablero automáticamente, se ha usado un algoritmo llamado backtracking. Lo que hace este algoritmo es probar a meter números en las casillas vacías uno por uno, y si se encuentra con que algo no encaja, da marcha atrás y prueba otra cosa. Es como ir avanzando por un laberinto, pero si te chocas con una pared, te das la vuelta y pruebas otro camino.

Este método está en la clase `SudokuTablero`, y funciona bien tanto para tableros fáciles como difíciles. Tarda un poco más si el tablero tiene muchos huecos, pero al final siempre encuentra una solución válida (si es que la hay).

---

## 6. Organización del Código

El código está dividido en clases, como ya se ha dicho antes, y cada clase tiene su función. La idea es que cada parte del programa esté separada para que no se mezcle todo en una sola clase gigante. Por ejemplo, `Main` solo sirve para manejar lo que ve el usuario, y `SudokuTablero` se encarga de todo lo que pasa dentro del tablero.  
He intentado usar nombres de métodos y variables que tengan sentido, y he puesto comentarios donde me parecía necesario para que cualquiera que lo lea pueda entender lo que hace el código.

---

## 7. Manejo de Errores

Para que el programa no se rompa si el usuario mete cosas raras (como letras o números fuera del rango), se ha usado manejo de excepciones con `try-catch`. Así, si el usuario mete mal los datos, el programa no se cierra de golpe, sino que le avisa y le da otra oportunidad.  
Además, se podría crear una excepción personalizada (como `SudokuException`) para controlar errores más específicos del juego, aunque en este proyecto no era obligatorio.

---

## 8. Interfaz de Usuario

La interfaz que se ha hecho es muy básica, ya que todo funciona por consola. Al empezar, se le pregunta al jugador qué nivel quiere. Después, se le va mostrando el tablero y se le pide que diga en qué fila y columna quiere meter un número, y cuál es el número.  
Cada vez que mete un número, se vuelve a mostrar el tablero con el cambio, o se le avisa si ha puesto algo mal. Aunque es simple, se puede jugar perfectamente y es fácil de entender.

---

## 9. Conclusión

Este proyecto de Sudoku ha sido útil para practicar varias cosas importantes de Java, como arrays bidimensionales, estructuras de control, clases, métodos, programación orientada a objetos, manejo de errores y algo de algoritmos.  
También me ha ayudado a entender mejor cómo dividir un programa grande en partes pequeñas, cómo hacer que el código sea más limpio y cómo pensar en los errores que puede cometer un usuario.  
Aunque hay muchas cosas que se podrían mejorar, el juego funciona bien y se puede jugar sin problemas desde la consola.
