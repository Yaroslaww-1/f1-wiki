import React from 'react';
import { FormCheck } from 'react-bootstrap';
import DriversFullTable from '../DriversFullTable';
import DriversShortTable from '../DriversShortTable';

const DriversTable: React.FC = () => {
  const [isFull, setIsFull] = React.useState<boolean>(false);

  const onChange = () => {
    setIsFull((isFull) => !isFull);
  };

  return (
    <>
      <FormCheck onChange={onChange} type="switch" id="custom-switch" label="Show drivers with JOIN" />
      {isFull ? <DriversFullTable /> : <DriversShortTable />}
    </>
  );
};

export default DriversTable;
