import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Exclude()
export class DriverFullDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly name: string;

  @Expose()
  @IsNumber()
  readonly totalSeasonPoints: number;

  @Expose()
  @IsString()
  readonly birthday: string;

  @Expose()
  @IsNumber()
  readonly nationality: number;

  @Expose()
  @IsNumber()
  readonly teamID: number;

  @Expose()
  @IsString()
  readonly teamName: string;

  constructor(props: DriverFullDto) {
    Object.assign(this, props);
  }
}
