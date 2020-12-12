import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { DriverEntity } from '../entities/driver.entity';

export interface IDriverFilter {
  name?: string;
  offset?: number;
  limit?: number;
}

@Injectable()
export class DriverRepository extends BaseRepository implements IRepository<DriverEntity, unknown> {
  constructor(private readonly pool: Pool) {
    super(pool);
  }

  async findAll(filter: IDriverFilter = {}): Promise<DriverEntity[]> {
    const { name = '', offset = 0, limit = 10 } = filter;
    const drivers = await super.query<DriverEntity>(
      `
      SELECT * FROM "Drivers"
      WHERE "Name" ILIKE '${name}%'
      OFFSET $1
      LIMIT $2 
    `,
      [offset, limit],
    );
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
