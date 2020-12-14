import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Exclude()
export class CreateDriverDto {
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

  constructor(props: CreateDriverDto) {
    Object.assign(this, props);
  }
}
