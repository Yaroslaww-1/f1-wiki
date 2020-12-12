import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [DriverModule, DatabaseModule],
})
export class RootModule {}
