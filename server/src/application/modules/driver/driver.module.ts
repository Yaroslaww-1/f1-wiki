import { Module } from '@nestjs/common';
import { DriverFullController } from './controllers/driver-full.controller';
import { DriverController } from './controllers/driver.controller';
import { DriverFullRepository } from './repositories/driver-full.repository';
import { DriverRepository } from './repositories/driver.repository';
import { DriverFullService } from './services/driver-full.service';
import { DriverService } from './services/driver.service';

const repositories = [DriverRepository, DriverFullRepository];
const services = [DriverService, DriverFullService];

@Module({
  imports: [],
  controllers: [DriverController, DriverFullController],
  providers: [...repositories, ...services],
})
export class DriverModule {}
