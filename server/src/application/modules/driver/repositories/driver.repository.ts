import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { DriverDto } from '../dtos/driver.dto';

@Injectable()
export class DriverRepository extends BaseRepository implements IRepository<DriverDto, unknown> {
  constructor(private readonly pool: Pool) {
    super(pool);
  }

  async findAll<T = unknown>(filter?: T): Promise<DriverDto[]> {
    const drivers = await super.query<DriverDto>('SELECT * FROM "Drivers"');
    return drivers;
  }

  findOne(id: number): Promise<DriverDto> {
    throw new Error('Method not implemented.');
  }

  save(creatingDto: unknown): Promise<DriverDto> {
    throw new Error('Method not implemented.');
  }

  update(id: number, updatingDto: unknown): Promise<DriverDto> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
