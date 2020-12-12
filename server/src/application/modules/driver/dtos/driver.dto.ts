export class DriverDto {
  readonly id: number;
  readonly name: string;
  readonly totalSeasonPoints: number;
  readonly birthday: Date;
  readonly nationality: number;

  constructor({
    id,
    name,
    totalSeasonPoints,
    birthday,
    nationality,
  }: {
    id: number;
    name: string;
    totalSeasonPoints: number;
    birthday: Date;
    nationality: number;
  }) {
    this.id = id;
    this.name = name;
    this.totalSeasonPoints = totalSeasonPoints;
    this.birthday = birthday;
    this.nationality = nationality;
  }
}
