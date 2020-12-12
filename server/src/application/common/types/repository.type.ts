/* eslint-disable @typescript-eslint/no-explicit-any */
import { IEntity } from './entity.type';

export interface IRepository<E extends IEntity, CreatingDto, UpdatingDto = CreatingDto> {
  findAll<T = any>(filter?: T): Promise<E[]>;
  findOne(id: number): Promise<E>;
  save(creatingDto: CreatingDto): Promise<E>;
  update(id: number, updatingDto: UpdatingDto): Promise<E>;
  delete(id: number): Promise<void>;
}
