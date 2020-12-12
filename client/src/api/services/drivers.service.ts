import api from '../api.helper';
import { DriverModel } from '../models/driver.model';

const endpoint = 'drivers';

export interface IDriverFilter {
  name: string;
}

export class DriverService {
  constructor() {}
  static async getDrivers(filter?: IDriverFilter): Promise<DriverModel[]> {
    const drivers = await api.get(endpoint, filter);
    return drivers as DriverModel[];
  }
}
