import React, { ReactNode } from 'react';
import { Table as TableBootstrap } from 'react-bootstrap';

export interface ITableColumn<T> {
  name: keyof T;
  customElement?: ReactNode;
}

interface IProps<T> {
  columns: ITableColumn<T>[];
  rows: T[];
}

const Table = <T extends Record<string, string | number | Date>>({ rows, columns }: IProps<T>) => {
  const getTableHead = () =>
    columns.map(({ name, customElement }) => {
      if (customElement) return customElement;
      else
        return (
          <th key={name.toString()} style={{ textTransform: 'capitalize' }}>
            {name}
          </th>
        );
    });

  const getRow = (row: T, key: number) => {
    const columnNames = columns.map((c) => c.name);
    const rowElementValues = columnNames.map((key) => row[key]);
    return (
      <tr key={key}>
        {rowElementValues.map((value, index) => (
          <td key={index}>{value}</td>
        ))}
      </tr>
    );
  };

  return (
    <TableBootstrap striped bordered hover>
      <thead>
        <tr>{getTableHead()}</tr>
      </thead>
      <tbody>{rows.map((row, index) => getRow(row, index))}</tbody>
    </TableBootstrap>
  );
};

export default Table;
