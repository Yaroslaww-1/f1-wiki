import React from 'react';
import { DriverModel } from 'src/api/models/driver.model';
import { DriverService, IDriverFilter } from 'src/api/services/drivers.service';
import Input from 'src/components/Input';
import Table from 'src/components/Table';

const DriversTable: React.FC = () => {
  const [drivers, setDrivers] = React.useState<DriverModel[] | null>(null);
  const [driverFilter, setDriverFilter] = React.useState<IDriverFilter>({ name: '' });

  React.useEffect(() => {
    fetchAndUpdateDrivers();
  }, [driverFilter]);

  const fetchAndUpdateDrivers = async () => {
    const drivers = await DriverService.getDrivers(driverFilter);
    setDrivers(drivers);
  };

  const onDriverFilterUpdate = (fieldProperty: keyof IDriverFilter) => (newValue: string) => {
    setDriverFilter({
      ...driverFilter,
      [fieldProperty]: newValue,
    });
  };

  return (
    drivers && (
      <Table
        columns={[
          { name: 'id' },
          { name: 'name', customElement: <Input placeholder="Name" onEdit={onDriverFilterUpdate('name')} /> },
          { name: 'totalSeasonPoints' },
          { name: 'birthday' },
          { name: 'nationality' },
          { name: 'teamID' },
        ]}
        rows={drivers}
      />
    )
  );
};

export default DriversTable;
