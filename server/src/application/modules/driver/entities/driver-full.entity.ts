import { Expose } from 'class-transformer';

export class DriverFullEntity {
  @Expose({ name: 'id' })
  readonly ID: number;

  @Expose({ name: 'name' })
  readonly Name: string;

  @Expose({ name: 'totalSeasonPoints' })
  readonly TotalSeasonPoints: number;

  @Expose({ name: 'birthday' })
  readonly Birthday: Date;

  @Expose({ name: 'nationality' })
  readonly Nationality: number;

  @Expose({ name: 'teamID' })
  readonly TeamID: number;

  @Expose({ name: 'teamName' })
  readonly TeamName: number;

  constructor(props: DriverFullEntity) {
    Object.assign(this, props);
  }
}
