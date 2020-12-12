import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { DriverDto } from '../dtos/driver.dto';
import { DriverEntity } from '../entities/driver.entity';
import { DriverRepository, IDriverFilter } from '../repositories/driver.repository';

@Injectable()
export class DriverService extends BaseService<DriverDto, unknown> {
  constructor(private readonly driverRepository: DriverRepository) {
    super(driverRepository);
  }

  private fromEntityToDto(driverEntity: DriverEntity): DriverDto {
    return new DriverDto({
      id: driverEntity.ID,
      name: driverEntity.Name,
      totalSeasonPoints: driverEntity.TotalSeasonPoints,
      nationality: driverEntity.Nationality,
      birthday: driverEntity.Birthday,
    });
  }

  async findAll(filter: IDriverFilter): Promise<DriverDto[]> {
    const drivers = await this.driverRepository.findAll(filter);
    return drivers.map(driver => this.fromEntityToDto(driver));
  }
}
