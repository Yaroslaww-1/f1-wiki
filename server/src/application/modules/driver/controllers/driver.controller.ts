import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateDriverDto } from '../dtos/create-driver.dto';
import { DriverDto } from '../dtos/driver.dto';
import { UpdateDriverDto } from '../dtos/update-driver.dto';
import { IDriverFilter } from '../repositories/driver.repository';
import { DriverService } from '../services/driver.service';

@Controller('drivers')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  async getDrivers(@Query() filter: IDriverFilter): Promise<DriverDto[]> {
    const drivers = await this.driverService.findAll(filter);
    return drivers;
  }

  @Post()
  async createDriver(@Body() driver: CreateDriverDto): Promise<DriverDto> {
    const newDriver = await this.driverService.save(driver);
    return newDriver;
  }

  @Put(':id')
  async updateDriver(@Param('id') driverId: number, @Body() driver: UpdateDriverDto): Promise<DriverDto> {
    const newDriver = await this.driverService.update(driverId, driver);
    return newDriver;
  }

  @Delete(':id')
  async deleteDriver(@Param('id', ParseIntPipe) driverId: number): Promise<number> {
    await this.driverService.delete(driverId);
    return driverId;
  }
}
