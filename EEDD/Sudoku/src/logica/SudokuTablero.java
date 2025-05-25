package logica;

import java.util.Random;

public class SudokuTablero {
    private int[][] tablero = new int[9][9];
    private boolean[][] celdasIniciales = new boolean[9][9];

    public SudokuTablero(String dificultad) {
        generarTablero(dificultad);
    }

    public int[][] getTablero() {
        return tablero;
    }

    public void mostrarTablero() {
        System.out.println("-------------------------");
        for (int i = 0; i < 9; i++) {
            System.out.print("| ");
            for (int j = 0; j < 9; j++) {
                System.out.print(tablero[i][j] == 0 ? ". " : tablero[i][j] + " ");
                if ((j + 1) % 3 == 0) System.out.print("| ");
            }
            System.out.println();
            if ((i + 1) % 3 == 0) System.out.println("-------------------------");
        }
    }

    public boolean esMovimientoValido(int fila, int columna, int numero) {
        if (fila < 0 || columna < 0 || fila > 8 || columna > 8 || numero < 1 || numero > 9) return false;
        if (celdasIniciales[fila][columna]) return false;
        return esSeguro(fila, columna, numero);
    }

    public void realizarMovimiento(int fila, int columna, int numero) {
        tablero[fila][columna] = numero;
    }

    public boolean estaCompleto() {
        for (int[] fila : tablero) {
            for (int valor : fila) {
                if (valor == 0) return false;
            }
        }
        return true;
    }

    private void generarTablero(String dificultad) {
        // Generar un tablero completamente lleno usando backtracking
        resolverTablero(tablero);
        // Eliminar celdas en base a la dificultad
        int celdasAEliminar = dificultad.equals("facil") ? 30 :
                dificultad.equals("medio") ? 45 : 55;

        Random rand = new Random();
        while (celdasAEliminar > 0) {
            int i = rand.nextInt(9);
            int j = rand.nextInt(9);
            if (tablero[i][j] != 0) {
                tablero[i][j] = 0;
                celdasAEliminar--;
            }
        }

        // Marcar qué celdas no se pueden modificar
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                celdasIniciales[i][j] = tablero[i][j] != 0;
            }
        }
    }

    private boolean esSeguro(int fila, int columna, int num) {
        for (int i = 0; i < 9; i++) {
            if (tablero[fila][i] == num || tablero[i][columna] == num) return false;
        }

        int startFila = fila - fila % 3;
        int startCol = columna - columna % 3;

        for (int i = startFila; i < startFila + 3; i++) {
            for (int j = startCol; j < startCol + 3; j++) {
                if (tablero[i][j] == num) return false;
            }
        }

        return true;
    }

    public boolean resolverTablero(int[][] tablero) {
        for (int fila = 0; fila < 9; fila++) {
            for (int col = 0; col < 9; col++) {
                if (tablero[fila][col] == 0) {
                    for (int num = 1; num <= 9; num++) {
                        if (esSeguro(fila, col, num)) {
                            tablero[fila][col] = num;
                            if (resolverTablero(tablero)) return true;
                            tablero[fila][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
}
