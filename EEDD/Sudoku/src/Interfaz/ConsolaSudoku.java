package ui;

import logica.SudokuJuego;
import Excepciones.MovimientoInvalido;
import java.util.Scanner;

public class ConsolaSudoku {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Dificultad (facil, medio, dificil): ");
        String dificultad = sc.nextLine();

        SudokuJuego juego = new SudokuJuego(dificultad);

        while (true) {
            juego.mostrar();
            System.out.print("Fila (0-8): ");
            int fila = sc.nextInt();
            System.out.print("Columna (0-8): ");
            int col = sc.nextInt();
            System.out.print("Número (1-9): ");
            int numero = sc.nextInt();

            try {
                juego.realizarMovimiento(fila, col, numero);
            } catch (MovimientoInvalido e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
    }
}
