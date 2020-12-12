import React from 'react';
import { Table as TableBootstrap } from 'react-bootstrap';

interface IProps<T> {
  rows: T[];
}

const Table = <T extends Record<string, string | number | Date>>({ rows }: IProps<T>) => {
  const columnNames = Object.keys(rows[0]);
  const getRow = (row: T, key: number) => {
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
        <tr>
          {columnNames.map((columnName, index) => (
            <th key={index}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>{rows.map((row, index) => getRow(row, index))}</tbody>
    </TableBootstrap>
  );
};

export default Table;
