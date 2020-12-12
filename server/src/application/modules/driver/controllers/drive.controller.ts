import { Controller, Get, Query } from '@nestjs/common';
import { DriverDto } from '../dtos/driver.dto';
import { IDriverFilter } from '../repositories/driver.repository';
import { DriverService } from '../services/driver.service';

@Controller('drivers')
export class DriveController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  async getDrivers(@Query() filter: IDriverFilter): Promise<DriverDto[]> {
    const drivers = await this.driverService.findAll(filter);
    return drivers;
  }
}
