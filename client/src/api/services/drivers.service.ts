import api from '../api.helper';
import { IPaginationFilter } from '../filters/pagination.filter';
import { DriverModel } from '../models/driver.model';

const endpoint = 'drivers';

export type IDriverFilter = {
  name?: string;
  totalSeasonPoints?: number;
} & IPaginationFilter;

export class DriverService {
  static async getDrivers(filter?: IDriverFilter): Promise<DriverModel[]> {
    const drivers = await api.get(endpoint, filter);
    return drivers as DriverModel[];
  }

  static async updateDriver(newDriver: DriverModel): Promise<DriverModel> {
    const driver = await api.put(`${endpoint}/${newDriver.id}`, newDriver);
    return driver as DriverModel;
  }

  static async deleteDriver(driverId: number): Promise<void> {
    await api.delete(`${endpoint}/${driverId}`);
  }
}
