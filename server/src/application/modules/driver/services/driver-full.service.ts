import { BaseService } from '@application/common/base-classes/base-service';
import { Injectable } from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { DriverFullDto } from '../dtos/driver-full.dto';
import { DriverFullRepository } from '../repositories/driver-full.repository';

@Injectable()
export class DriverFullService extends BaseService<DriverFullDto, unknown> {
  constructor(private readonly driverRepository: DriverFullRepository) {
    super(driverRepository, entity => plainToClass(DriverFullDto, classToPlain(entity)));
  }
}
