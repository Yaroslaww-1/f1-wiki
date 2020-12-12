export class DriverEntity {
  readonly ID: number;
  readonly Name: string;
  readonly TotalSeasonPoints: number;
  readonly Birthday: Date;
  readonly Nationality: number;

  constructor({
    ID,
    Name,
    TotalSeasonPoints,
    Birthday,
    Nationality,
  }: {
    ID: number;
    Name: string;
    TotalSeasonPoints: number;
    Birthday: Date;
    Nationality: number;
  }) {
    this.ID = ID;
    this.Name = Name;
    this.TotalSeasonPoints = TotalSeasonPoints;
    this.Birthday = Birthday;
    this.Nationality = Nationality;
  }
}
