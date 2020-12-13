import { IRepository } from '@application/common/types/repository.type';
import { IService } from '../types/service.type';

export class BaseService<Dto, CreatingDto, UpdatingDto = CreatingDto>
  implements IService<Dto, CreatingDto, UpdatingDto> {
  constructor(
    private readonly repository: IRepository<unknown, CreatingDto, UpdatingDto>,
    private readonly fromEntityToDto: (entity: unknown) => Dto,
  ) {}

  async findAll<T = unknown>(filter?: T): Promise<Dto[]> {
    const items = await this.repository.findAll(filter);
    return items.map(item => this.fromEntityToDto(item));
  }

  async findOne(id: number): Promise<Dto> {
    const item = await this.repository.findOne(id);
    return this.fromEntityToDto(item);
  }

  async save(creatingDto: CreatingDto): Promise<Dto> {
    const newItem = await this.repository.save(creatingDto);
    return this.fromEntityToDto(newItem);
  }

  async update(id: number, updatingDto: UpdatingDto): Promise<Dto> {
    const newItem = await this.repository.update(id, updatingDto);
    return this.fromEntityToDto(newItem);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
