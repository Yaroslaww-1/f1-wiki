import { Controller, Get } from '@nestjs/common';
import { DriverDto } from '../dtos/driver.dto';
import { DriverService } from '../services/driver.service';

@Controller('drivers')
export class DriveController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  async getDrivers(): Promise<DriverDto[]> {
    const drivers = await this.driverService.findAll();
    return drivers;
  }
}
