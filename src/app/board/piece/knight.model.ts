import { Piece } from './piece.model';

export class Knight extends Piece {
  constructor(
    public name: string,
    public icon: string,
    public color: string,
    public location: string
  ) {
    super(color, location);
  }

  getValidMoves() {
    const validMoves = [];
    const possibleMoves = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 2, y: -1 },
      { x: 1, y: -2 },
      { x: -1, y: -2 },
      { x: -2, y: -1 },
      { x: -2, y: 1 },
      { x: -1, y: 2 },
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
