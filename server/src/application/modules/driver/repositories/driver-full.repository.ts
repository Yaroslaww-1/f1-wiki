import { BaseRepository } from '@application/common/base-classes/base-repository';
import { IRepository } from '@application/common/types/repository.type';
import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { DriverFullEntity } from '../entities/driver-full.entity';
import { IDriverFilter } from './driver.repository';

@Injectable()
export class DriverFullRepository extends BaseRepository implements IRepository<DriverFullEntity, unknown> {
  constructor(private readonly pool: Pool) {
    super(pool);
  }

  private getWhereFromFilter(filter: IDriverFilter): string {
    const where = [];
    if (filter.name) where.push(`d."Name" ILIKE '${filter.name}%'`);
    if (filter.totalSeasonPoints) where.push(`d."TotalSeasonPoints" = ${filter.totalSeasonPoints}`);
    const whereCondition = where.length > 0 ? `WHERE ${where.join(' AND ')} ` : ' ';
    return whereCondition;
  }

  async findAll({ offset = 0, limit = 10, ...filter }: IDriverFilter = {}): Promise<DriverFullEntity[]> {
    const where = this.getWhereFromFilter(filter);
    const drivers = await super.query<DriverFullEntity>(
      `
      SELECT d.*, t."Name" "TeamName" FROM "Drivers" d
      LEFT OUTER JOIN "Teams" t ON d."TeamID" = t."ID"
      ${where}
      OFFSET $1
      LIMIT $2;
    `,
      [offset, limit],
    );
    console.log(drivers);
    return drivers.map(driver => new DriverFullEntity(driver));
  }

  findOne(id: number): Promise<DriverFullEntity> {
    throw new Error('Method not implemented.');
  }

  async save(creatingDto: unknown): Promise<DriverFullEntity> {
    throw new Error('Method not implemented.');
  }

  async update(id: number, updatingDto: unknown): Promise<DriverFullEntity> {
    throw new Error('Method not implemented.');
  }

  async delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
