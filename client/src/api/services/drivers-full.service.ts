import api from '../api.helper';
import { IPaginationFilter } from '../filters/pagination.filter';
import { DriverFullModel } from '../models/driver-full.model';

const endpoint = 'drivers-full';

export type IDriverFilter = {
  name?: string;
  totalSeasonPoints?: number;
} & IPaginationFilter;

export class DriverFullService {
  static async getDrivers(filter?: IDriverFilter): Promise<DriverFullModel[]> {
    const drivers = await api.get('drivers-full', filter);
    return drivers as DriverFullModel[];
  }
}
