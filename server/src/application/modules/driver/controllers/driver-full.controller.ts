import { Controller, Get, Query } from '@nestjs/common';
import { DriverFullDto } from '../dtos/driver-full.dto';
import { IDriverFilter } from '../repositories/driver.repository';
import { DriverFullService } from '../services/driver-full.service';

@Controller('drivers-full')
export class DriverFullController {
  constructor(private readonly driverFullService: DriverFullService) {}

  @Get()
  async getDrivers(@Query() filter: IDriverFilter): Promise<DriverFullDto[]> {
    const drivers = await this.driverFullService.findAll(filter);
    return drivers;
  }
}
