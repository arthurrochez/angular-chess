export abstract class Piece {
  constructor(
    public color: string,
    public location: string
  ) {}



  public  abstract getValidMoves(): string[];
}
