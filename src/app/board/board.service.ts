import { Injectable } from '@angular/core';
import { Cell } from './cell.model';

@Injectable({
  providedIn: 'root',
})
export class boardService {
  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  numbers: number[] = [];

  generateChessBoard(): Cell[][] {
    for (let number = 1; number < 9; number++) {
      this.numbers.push(number);
    }

    const chessBoard: Cell[][] = [];

    for (let number of this.numbers) {
      let row: Cell[] = [];

      for (let letter of this.letters) {
        row.push(
          {
            cell: letter + number,
            piece: {},
            isOccupied: false,
            validMove: false,
            readyToMove: false,
            isCapturable: false
          }
        );
      }

      chessBoard.push(row);
    }

    return chessBoard;
  }
}
