import React from 'react';
import { IPaginationFilter } from 'src/api/filters/pagination.filter';
import { DriverFullModel } from 'src/api/models/driver-full.model';
import { DriverFullService, IDriverFilter } from 'src/api/services/drivers-full.service';
import Input from 'src/components/Input';
import PaginationComponent from 'src/components/Pagination';
import Table from 'src/components/Table';

const DriversFullTable: React.FC = () => {
  const [drivers, setDrivers] = React.useState<DriverFullModel[] | null>(null);
  const [driverFilter, setDriverFilter] = React.useState<IDriverFilter>({ offset: 0, limit: 10 });

  React.useEffect(() => {
    fetchAndUpdateDrivers();
  }, [driverFilter]);

  const fetchAndUpdateDrivers = async () => {
    const drivers = await DriverFullService.getDrivers(driverFilter);
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
      <>
        <PaginationComponent step={10} onChange={onPaginationChange}>
          <Table<DriverFullModel>
            columns={[
              { name: 'id', type: 'number', isEditable: false },
              {
                name: 'name',
                type: 'string',
                isEditable: false,
                filterElement: <Input placeholder="Name" onEdit={onDriverFilterUpdate('name')} />,
              },
              {
                name: 'totalSeasonPoints',
                type: 'string',
                isEditable: false,
                filterElement: (
                  <Input placeholder="Total Season Points" onEdit={onDriverFilterUpdate('totalSeasonPoints')} />
                ),
              },
              { name: 'birthday', type: 'string', isEditable: false },
              { name: 'nationality', type: 'number', isEditable: false },
              { name: 'teamID', type: 'number', isEditable: false },
              { name: 'teamName', type: 'string', isEditable: false },
            ]}
            rows={drivers}
            editable={false}
          />
        </PaginationComponent>
      </>
    )
  );
};

export default DriversFullTable;
