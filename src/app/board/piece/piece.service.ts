import { Injectable } from '@angular/core';
import { Pawn } from './pawn.model';
import { Knight } from './knight.model';
import { Rook } from './rook.model';
import { Bishop } from './bishop.model';
import { King } from './king.model';
import { Queen } from './queen.model';

@Injectable({
  providedIn: 'root',
})
export class pieceService {
  public pawns: Pawn[] = [];
  public knights: Knight[] = [];
  public rooks: Rook[] = [];
  public bishops: Bishop[] = [];
  public kings: King[] = [];
  public queens: Queen[] = [];
  public pieces: (Pawn | Knight | Rook | Bishop | King | Queen)[] = [];

  generatePawns(): void {
    for (let i = 1; i < 9; i++) {
      const pawn = new Pawn(
        `PW${i}`,
        '♟',
        'white',
        `${String.fromCharCode(64 + i)}2`
      );
      this.pawns.push(pawn);
    }
    for (let i = 1; i < 9; i++) {
      const pawn = new Pawn(
        `PB${i}`,
        '♟',
        'black',
        `${String.fromCharCode(64 + i)}7`
      );
      this.pawns.push(pawn);
    }
  }

  generateKnights(): void {
    const columns = ['B', 'G'];
    columns.forEach((column, i) => {
      const whiteKnight = new Knight(`KW${i + 1}`, '♞', 'white', `${column}1`);
      const blackKnight = new Knight(`KB${i + 1}`, '♞', 'black', `${column}8`);
      this.knights.push(whiteKnight, blackKnight);
    });
  }

  generateRooks(): void {
    const columns = ['A', 'H'];
    columns.forEach((column, i) => {
      const whiteRook = new Rook(`RW${i + 1}`, '♜', 'white', `${column}1`);
      const blackRook = new Rook(`RB${i + 1}`, '♜', 'black', `${column}8`);
      this.rooks.push(whiteRook, blackRook);
    });
  }

  generateBishops(): void {
    const columns = ['C', 'F'];
    columns.forEach((column, i) => {
      const whiteBishop = new Bishop(`BW${i + 1}`, '♝', 'white', `${column}1`);
      const blackBishop = new Bishop(`BB${i + 1}`, '♝', 'black', `${column}8`);
      this.bishops.push(whiteBishop, blackBishop);
    });
  }

  generateKings(): void {
    const whiteKing = new King(`KW`, '♚', 'white', `E1`);
    const blackKing = new King(`KB`, '♚', 'black', `D8`);
    this.kings.push(whiteKing, blackKing);
  }

  generateQueens(): void {
    const whiteQueen = new Queen(`QW`, '♛', 'white', `D1`);
    const blackQueen = new Queen(`QB`, '♛', 'black', `E8`);
    this.kings.push(whiteQueen, blackQueen);
  }

  generatePieces(): (Pawn | Knight | Rook | Bishop | King | Queen)[] {
    this.generatePawns();
    this.generateKnights();
    this.generateRooks();
    this.generateBishops();
    this.generateKings();
    this.generateQueens();
    // console.log(this.pawns);
    this.pieces.push(...this.pawns);
    this.pieces.push(...this.knights);
    this.pieces.push(...this.rooks);
    this.pieces.push(...this.bishops);
    this.pieces.push(...this.kings);
    this.pieces.push(...this.queens);
    return this.pieces;
  }
}
