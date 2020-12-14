import React from 'react';
import { IPaginationFilter } from 'src/api/filters/pagination.filter';
import { DriverModel } from 'src/api/models/driver.model';
import { DriverService, IDriverFilter } from 'src/api/services/drivers.service';
import Input from 'src/components/Input';
import PaginationComponent from 'src/components/Pagination';
import Table from 'src/components/Table';
import AddDriver from '../AddDriver';

const DriversShortTable: React.FC = () => {
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

  const onEdit = async (newDriver: DriverModel) => {
    await DriverService.updateDriver(newDriver);
    fetchAndUpdateDrivers();
  };

  const onDelete = async (driver: DriverModel) => {
    await DriverService.deleteDriver(driver.id);
    fetchAndUpdateDrivers();
  };

  return (
    drivers && (
      <>
        <AddDriver onSave={fetchAndUpdateDrivers} />
        <PaginationComponent step={10} onChange={onPaginationChange}>
          <Table<DriverModel>
            columns={[
              { name: 'id', type: 'number', isEditable: false },
              {
                name: 'name',
                type: 'string',
                isEditable: true,
                filterElement: <Input placeholder="Name" onEdit={onDriverFilterUpdate('name')} />,
              },
              {
                name: 'totalSeasonPoints',
                type: 'string',
                isEditable: true,
                filterElement: (
                  <Input placeholder="Total Season Points" onEdit={onDriverFilterUpdate('totalSeasonPoints')} />
                ),
              },
              { name: 'birthday', type: 'string', isEditable: true },
              { name: 'nationality', type: 'number', isEditable: true },
              { name: 'teamID', type: 'number', isEditable: true },
            ]}
            rows={drivers}
            onDelete={onDelete}
            onEditSubmit={onEdit}
          />
        </PaginationComponent>
      </>
    )
  );
};

export default DriversShortTable;
