import { Global, Module } from '@nestjs/common';
import { Pool } from 'pg';
import { connection } from './connection';

@Global()
@Module({
  providers: [
    {
      provide: Pool,
      useValue: connection,
    },
  ],
  exports: [Pool],
})
export class DatabaseModule {}
