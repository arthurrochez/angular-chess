import { Piece } from './piece.model';

export class Bishop extends Piece {

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
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 4 },
      { x: 5, y: 5 },
      { x: 6, y: 6 },
      { x: 7, y: 7 },
      { x: 1, y: -1 },
      { x: 2, y: -2 },
      { x: 3, y: -3 },
      { x: 4, y: -4 },
      { x: 5, y: -5 },
      { x: 6, y: -6 },
      { x: 7, y: -7 },
      { x: -1, y: 1 },
      { x: -2, y: 2 },
      { x: -3, y: 3 },
      { x: -4, y: 4 },
      { x: -5, y: 5 },
      { x: -6, y: 6 },
      { x: -7, y: 7 },
      { x: -1, y: -1 },
      { x: -2, y: -2 },
      { x: -3, y: -3 },
      { x: -4, y: -4 },
      { x: -5, y: -5 },
      { x: -6, y: -6 },
      { x: -7, y: -7 }
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
