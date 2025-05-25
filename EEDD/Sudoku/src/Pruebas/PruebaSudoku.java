package pruebas;

import logica.SudokuTablero;

public class PruebaSudoku {

    public static void main(String[] args) {
        System.out.println("Iniciando pruebas del Sudoku...\n");

        pruebaGeneracion();
        pruebaValidacion();
        pruebaResolucion();
    }

    public static void pruebaGeneracion() {
        SudokuTablero tablero = new SudokuTablero("facil");
        if (tablero.getTablero() != null) {
            System.out.println("✔ Generación del tablero: PASADA");
        } else {
            System.out.println("✘ Generación del tablero: FALLIDA");
        }
    }

    public static void pruebaValidacion() {
        SudokuTablero tablero = new SudokuTablero("facil");
        int[][] t = tablero.getTablero();

        // Busca una casilla vacía para probar
        for (int fila = 0; fila < 9; fila++) {
            for (int col = 0; col < 9; col++) {
                if (t[fila][col] == 0) {
                    boolean valido = tablero.esMovimientoValido(fila, col, 5);
                    System.out.println(valido
                            ? "✔ Validación de movimiento (libre): PASADA"
                            : "✘ Validación de movimiento (libre): FALLIDA");
                    return;
                }
            }
        }
    }

    public static void pruebaResolucion() {
        SudokuTablero tablero = new SudokuTablero("facil");
        boolean resuelto = tablero.resolverTablero(tablero.getTablero());
        System.out.println(resuelto
                ? "✔ Resolución del tablero: PASADA"
                : "✘ Resolución del tablero: FALLIDA");
    }
}
