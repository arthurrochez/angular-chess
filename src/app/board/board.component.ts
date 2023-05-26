import { Component } from '@angular/core';
import { boardService } from './board.service';
import { pieceService } from './piece/piece.service';
import { Cell } from './cell.model';
import { Pawn } from './piece/pawn.model';
import { Knight } from './piece/knight.model';
import { Rook } from './piece/rook.model';
import { Bishop } from './piece/bishop.model';
import { King } from './piece/king.model';
import { Queen } from './piece/queen.model';
import { Piece } from './piece/piece.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  letters: string[] = [];
  numbers: number[] = [];
  chessBoard: Cell[][] = [];
  pieces: (Pawn | Knight | Rook | Bishop | King | Queen)[] = [];
  activePiece: Piece | {} = {};
  previousCell: Cell | {} = {};
  nextCell: Cell | {} = {};
  validMoves: string[] = [];

  constructor(
    private boardService: boardService,
    private pieceService: pieceService
  ) {
    this.letters = this.boardService.letters;
    this.numbers = this.boardService.numbers;
    this.generateChessBoard();
    this.generatePieces();
    // console.log(this.pieces);
    this.setPiecesOnBoard();
    // console.log(this.chessBoard);
  }

  generateChessBoard(): void {
    this.chessBoard = this.boardService.generateChessBoard();
  }

  generatePieces(): void {
    this.pieces = this.pieceService.generatePieces();
  }

  isBlack(rowIndex: number, columnIndex: number): boolean {
    return (rowIndex + columnIndex) % 2 === 0;
  }

  isWhite(rowIndex: number, columnIndex: number): boolean {
    return (rowIndex + columnIndex) % 2 === 1;
  }

  setPiecesOnBoard() {
    this.pieces.forEach((piece) => {
      // console.log(piece.location);
      const row = piece.location[1];
      const cell = this.chessBoard[Number(row) - 1].find((i) => {
        return i.cell === piece.location;
      });
      // console.log(cell);
      cell.piece = piece;
      cell.isOccupied = true;
    });
  }

  handleClick(cell: Cell, isValidMove: boolean) {
    if (cell.piece instanceof Piece) {
      this.getMoves(cell.piece as Piece);
    } else if (isValidMove) {
      this.nextCell = cell;
      this.movePiece();
    } else {
      this.resetHighlights();
    }
  }

  getMoves(piece: Piece): void {
    this.resetHighlights();
    this.activePiece = piece;
    this.validMoves = piece.getValidMoves();
    // console.log(validMoves);
    this.chessBoard.forEach((row) => {
      row.forEach((cell) => {
        if (cell.cell === piece.location) {
          cell.readyToMove = true;
          this.previousCell = cell;
        }
        if (this.validMoves.includes(cell.cell) && cell.isOccupied === false) {
          cell.validMove = true;
        }
      });
    });
    // console.log(this.chessBoard);
  }

  resetHighlights() {
    this.chessBoard.forEach((row) => {
      row.forEach((cell) => {
        cell.validMove = false;
        cell.readyToMove = false;
      });
    });
  }

  movePiece() {
    console.log(this.activePiece);
    console.log(this.previousCell);
    console.log(this.nextCell);
    (this.activePiece as Piece).location = (this.nextCell as Cell).cell;
    (this.previousCell as Cell).piece = {};
    (this.previousCell as Cell).isOccupied = false;
    (this.nextCell as Cell).piece = this.activePiece;
    (this.nextCell as Cell).isOccupied = true;
    this.resetHighlights();
    console.log(this.chessBoard);
  }
}


// CREER COMP CELL & PIECE
// DIVISER EN PLUS PETITS FICHIERS
// TOUR BLANC ET TOUR NOIR


// API FIREBASE (ex : chat)
// PACKAGE.JSON
// ANGULAR.JSON
// APP MODULE
// INTERCEPTOR
// LAZY LOADING
// HTTP CALL
// APP ROUTING
// AUTORIZATION
// AUTHENTIFICATION

// RXJS
// OBSERVATEUR & ASYNC
// NGRX
// REFERENCE

// FRONT END ENGINEER



