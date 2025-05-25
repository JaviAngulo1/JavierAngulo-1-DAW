package logica;

public class ValidadorSudoku {
    public static boolean esValido(int[][] tablero, int fila, int col, int numero) {
        for (int i = 0; i < 9; i++) {
            if (tablero[fila][i] == numero || tablero[i][col] == numero)
                return false;
        }

        int subFila = fila / 3 * 3;
        int subCol = col / 3 * 3;
        for (int i = subFila; i < subFila + 3; i++) {
            for (int j = subCol; j < subCol + 3; j++) {
                if (tablero[i][j] == numero)
                    return false;
            }
        }
        return true;
    }
}
