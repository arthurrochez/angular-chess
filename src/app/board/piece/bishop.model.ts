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

  override getValidMoves(): string[] {

    const validMoves: string[] = [];

    if (this.color === 'white') {
      const nextRow = Number(this.location[1]) + 1;
      const nextPosition = `${this.location[0]}${nextRow}`;
      validMoves.push(nextPosition);
    } else {
      const nextRow = Number(this.location[1]) - 1;
      const nextPosition = `${this.location[0]}${nextRow}`;
      validMoves.push(nextPosition);
    }

    return validMoves;
  }

}
