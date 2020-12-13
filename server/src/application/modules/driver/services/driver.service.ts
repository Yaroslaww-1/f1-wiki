import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { DriverDto } from '../dtos/driver.dto';
import { DriverRepository } from '../repositories/driver.repository';

@Injectable()
export class DriverService extends BaseService<DriverDto, unknown> {
  constructor(private readonly driverRepository: DriverRepository) {
    super(driverRepository, entity => plainToClass(DriverDto, classToPlain(entity)));
  }
}
