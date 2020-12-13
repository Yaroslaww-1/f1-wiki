import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class DriverDto {
  @Expose()
  readonly id: number;

  @Expose()
  readonly name: string;

  @Expose()
  readonly totalSeasonPoints: number;

  @Expose()
  readonly birthday: Date;

  @Expose()
  readonly nationality: number;
}
