import React from 'react';
import { IPaginationFilter } from 'src/api/filters/pagination.filter';
import { DriverModel } from 'src/api/models/driver.model';
import { DriverService, IDriverFilter } from 'src/api/services/drivers.service';
import Input from 'src/components/Input';
import PaginationComponent from 'src/components/Pagination';
import Table from 'src/components/Table';

const DriversTable: React.FC = () => {
  const [drivers, setDrivers] = React.useState<DriverModel[] | null>(null);
  const [driverFilter, setDriverFilter] = React.useState<IDriverFilter>({ offset: 0, limit: 10 });

  React.useEffect(() => {
    fetchAndUpdateDrivers();
  }, [driverFilter]);

  const fetchAndUpdateDrivers = async () => {
    const drivers = await DriverService.getDrivers(driverFilter);
    setDrivers(drivers);
  };

  const onDriverFilterUpdate = (fieldProperty: keyof IDriverFilter) => (newValue: unknown) => {
    setDriverFilter({
      ...driverFilter,
      [fieldProperty]: newValue,
    });
  };

  const onPaginationChange = ({ offset, limit }: IPaginationFilter) => {
    setDriverFilter({
      ...driverFilter,
      offset,
      limit,
    });
  };

  return (
    drivers && (
      <PaginationComponent step={10} onChange={onPaginationChange}>
        <Table
          columns={[
            { name: 'id' },
            { name: 'name', customElement: <Input placeholder="Name" onEdit={onDriverFilterUpdate('name')} /> },
            {
              name: 'totalSeasonPoints',
              customElement: (
                <Input placeholder="Total Season Points" onEdit={onDriverFilterUpdate('totalSeasonPoints')} />
              ),
            },
            { name: 'birthday' },
            { name: 'nationality' },
            { name: 'teamID' },
          ]}
          rows={drivers}
        />
      </PaginationComponent>
    )
  );
};

export default DriversTable;
