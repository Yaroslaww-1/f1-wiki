export interface IService<Dto, CreatingDto, UpdatingDto = CreatingDto> {
  findAll<T = unknown>(filter?: T): Promise<Dto[]>;
  findOne(id: number): Promise<Dto>;
  save(creatingDto: CreatingDto): Promise<Dto>;
  update(id: number, updatingDto: UpdatingDto): Promise<Dto>;
  delete(id: number): Promise<void>;
}
