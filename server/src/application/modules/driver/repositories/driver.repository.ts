import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { DriverEntity } from '../entities/driver.entity';

export interface IDriverFilter {
  name?: string;
}

@Injectable()
export class DriverRepository extends BaseRepository implements IRepository<DriverEntity, unknown> {
  constructor(private readonly pool: Pool) {
    super(pool);
  }

  async findAll(filter: IDriverFilter = {}): Promise<DriverEntity[]> {
    const { name = '' } = filter;
    const drivers = await super.query<DriverEntity>(`
      SELECT * FROM "Drivers"
      WHERE "Name" ILIKE '${name}%'
    `);
    return drivers.map(driver => new DriverEntity(driver));
  }

  findOne(id: number): Promise<DriverEntity> {
    throw new Error('Method not implemented.');
  }

  save(creatingDto: unknown): Promise<DriverEntity> {
    throw new Error('Method not implemented.');
  }

  update(id: number, updatingDto: unknown): Promise<DriverEntity> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
