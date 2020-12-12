import React from 'react';
import { DriverModel } from 'src/api/models/driver.model';
import { DriverService } from 'src/api/services/drivers.service';
import Table from 'src/components/Table';

const DriversTable: React.FC = () => {
  const [drivers, setDrivers] = React.useState<DriverModel[] | null>(null);

  React.useEffect(() => {
    async function fetchDrivers() {
      const drivers = await DriverService.getDrivers();
      setDrivers(drivers);
    }

    fetchDrivers();
  }, []);

  return drivers && <Table rows={drivers} />;
};

export default DriversTable;
