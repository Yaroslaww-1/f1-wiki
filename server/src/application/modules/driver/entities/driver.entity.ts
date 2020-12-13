import { Expose } from 'class-transformer';

export class DriverEntity {
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

  constructor(props: DriverEntity) {
    Object.assign(this, props);
  }
}
