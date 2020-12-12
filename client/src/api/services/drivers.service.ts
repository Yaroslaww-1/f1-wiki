import api from '../api.helper';
import { DriverModel } from '../models/driver.model';

const endpoint = 'drivers';

export class DriverService {
  constructor() {}
  static async getDrivers(): Promise<DriverModel[]> {
    const drivers = await api.get(endpoint);
    return drivers as DriverModel[];
  }
}
