import api from '../api.helper';
import { IPaginationFilter } from '../filters/pagination.filter';
import { DriverModel } from '../models/driver.model';

const endpoint = 'drivers';

export type IDriverFilter = {
  name: string;
} & IPaginationFilter;

export class DriverService {
  constructor() {}
  static async getDrivers(filter?: IDriverFilter): Promise<DriverModel[]> {
    console.log(filter);
    const drivers = await api.get(endpoint, filter);
    return drivers as DriverModel[];
  }
}
