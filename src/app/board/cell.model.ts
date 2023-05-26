import { Piece } from "./piece/piece.model";

export class Cell {
  constructor(
    public cell: string,
    public piece: Piece | {},
    public isOccupied: boolean,
    public validMove: boolean,
    public readyToMove: boolean,
  ) {}
}