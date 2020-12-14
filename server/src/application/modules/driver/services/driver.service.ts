import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { CreateDriverDto } from '../dtos/create-driver.dto';
import { DriverDto } from '../dtos/driver.dto';
import { UpdateDriverDto } from '../dtos/update-driver.dto';
import { DriverRepository } from '../repositories/driver.repository';

@Injectable()
export class DriverService extends BaseService<DriverDto, CreateDriverDto, UpdateDriverDto> {
  constructor(private readonly driverRepository: DriverRepository) {
    super(driverRepository, entity => plainToClass(DriverDto, classToPlain(entity)));
  }
}
