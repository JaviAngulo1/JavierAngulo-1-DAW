package logica;

import Excepciones.MovimientoInvalido;

public class SudokuJuego {
    private SudokuTablero tablero;

    public SudokuJuego(String dificultad) {
        tablero = new SudokuTablero(dificultad);
    }

    public void mostrar() {
        tablero.mostrarTablero();
    }

    public void realizarMovimiento(int fila, int col, int valor) throws MovimientoInvalido {
        int[][] t = tablero.getTablero();
        if (t[fila][col] != 0)
            throw new MovimientoInvalido("La celda ya contiene un valor.");
        if (!ValidadorSudoku.esValido(t, fila, col, valor))
            throw new MovimientoInvalido("Movimiento inválido según las reglas de Sudoku.");

        t[fila][col] = valor;
    }
}
