import { Module } from '@nestjs/common';
import { DriveController } from './controllers/drive.controller';
import { DriverRepository } from './repositories/driver.repository';
import { DriverService } from './services/driver.service';

const repositories = [DriverRepository];
const services = [DriverService];

@Module({
  imports: [],
  controllers: [DriveController],
  providers: [...repositories, ...services],
})
export class DriverModule {}
