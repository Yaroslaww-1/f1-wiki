import React, { ReactNode } from 'react';
import { Table as TableBootstrap } from 'react-bootstrap';
import Row from './components/Row';

export interface ITableColumn<T> {
  name: keyof T;
  type: 'string' | 'number';
  isEditable: boolean;
  filterElement?: ReactNode;
}

interface IProps<T> {
  columns: ITableColumn<T>[];
  rows: T[];
  onEditSubmit: (rowValue: T) => void;
  onDelete: (rowValue: T) => void;
}

const Table = <T extends { id: number }>({ rows, columns, onEditSubmit, onDelete }: IProps<T>) => {
  const getTableHead = () =>
    columns.map(({ name, filterElement }) => {
      if (filterElement) return <th key={name.toString()}>{filterElement}</th>;
      else
        return (
          <th key={name.toString()} style={{ textTransform: 'capitalize' }}>
            {name}
          </th>
        );
    });

  return (
    <TableBootstrap striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          {getTableHead()}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <Row<T> key={row.id} columns={columns} initialValue={row} onEditSubmit={onEditSubmit} onDelete={onDelete} />
        ))}
      </tbody>
    </TableBootstrap>
  );
};

export default Table;
