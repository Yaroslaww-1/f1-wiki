import { Body, Controller, Delete, Get, Header, Param, ParseIntPipe, Put, Query, ValidationPipe } from '@nestjs/common';
import { DriverDto } from '../dtos/driver.dto';
import { UpdateDriverDto } from '../dtos/update-driver.dto';
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

  @Put(':id')
  @Header('Content-Type', 'application/json')
  async updateDriver(@Param('id') driverId: number, @Body() driver: UpdateDriverDto): Promise<DriverDto> {
    console.log(driver);
    const newDriver = await this.driverService.update(driverId, driver);
    return newDriver;
  }

  @Delete(':id')
  async deleteDriver(@Param('id', ParseIntPipe) driverId: number): Promise<number> {
    await this.driverService.delete(driverId);
    return driverId;
  }
}
