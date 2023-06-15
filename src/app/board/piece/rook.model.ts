import { Piece } from './piece.model';

export class Rook extends Piece {

  constructor(
    public name: string,
    public icon: string,
    public color: string,
    public location: string
  ) {
    super(
      color, location
    );
  }

  override getValidMoves() {
    const validMoves = [];
    const possibleMoves = [
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 6, y: 0 },
      { x: 7, y: 0 },
      { x: -1, y: 0 },
      { x: -2, y: 0 },
      { x: -3, y: 0 },
      { x: -4, y: 0 },
      { x: -5, y: 0 },
      { x: -6, y: 0 },
      { x: -7, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
      { x: 0, y: 4 },
      { x: 0, y: 5 },
      { x: 0, y: 6 },
      { x: 0, y: 7 },
      { x: 0, y: -1 },
      { x: 0, y: -2 },
      { x: 0, y: -3 },
      { x: 0, y: -4 },
      { x: 0, y: -5 },
      { x: 0, y: -6 },
      { x: 0, y: -7 }
    ];

    for (const move of possibleMoves) {
      const nextColumn = String.fromCharCode(
        this.location[0].charCodeAt(0) + move.x
      );
      const nextRow = Number(this.location[1]) + move.y;
      const nextPosition = `${nextColumn}${nextRow}`;
      validMoves.push(nextPosition);
    }

    return validMoves;
  }
}
