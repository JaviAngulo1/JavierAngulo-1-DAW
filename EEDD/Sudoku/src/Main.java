package principal;

import logica.SudokuTablero;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String dificultad;

        System.out.println("=== Bienvenido al Sudoku ===");
        System.out.println("Selecciona la dificultad (facil, medio, dificil): ");
        dificultad = scanner.nextLine().toLowerCase();

        // Crear tablero
        SudokuTablero tablero = new SudokuTablero(dificultad);

        while (!tablero.estaCompleto()) {
            tablero.mostrarTablero();

            System.out.println("Introduce tu jugada (fila [1-9], columna [1-9], número [1-9]): ");
            try {
                int fila = scanner.nextInt() - 1;
                int columna = scanner.nextInt() - 1;
                int numero = scanner.nextInt();

                if (tablero.esMovimientoValido(fila, columna, numero)) {
                    tablero.realizarMovimiento(fila, columna, numero);
                } else {
                    System.out.println("Movimiento inválido. Intenta otra vez.");
                }

            } catch (Exception e) {
                System.out.println("Entrada no válida. Usa números enteros.");
                scanner.nextLine(); // Limpiar buffer
            }
        }

        tablero.mostrarTablero();
        System.out.println("¡Felicidades, completaste el Sudoku!");
    }
}
