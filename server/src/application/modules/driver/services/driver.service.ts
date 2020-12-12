import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { DriverDto } from '../dtos/driver.dto';
import { DriverRepository } from '../repositories/driver.repository';

@Injectable()
export class DriverService extends BaseService<DriverDto, unknown> {
  constructor(private readonly driverRepository: DriverRepository) {
    super(driverRepository);
  }
}
