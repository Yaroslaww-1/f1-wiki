import React from 'react';
import { IInputTypes } from 'src/components/Input';
import { ITableColumn } from '../..';
import RowItem from '../RowItem';

interface IProps<T> {
  columns: ITableColumn<T>[];
  value: T;
}

const Row = <T extends Record<string, IInputTypes>>({ value, columns }: IProps<T>) => {
  const columnNames = columns.map((c) => c.name);

  return (
    <tr>
      {columnNames.map((columnName, index) => {
        return (
          <RowItem
            key={index}
            value={String(value[columnName])}
            isEditable={false}
            type={typeof value as 'string' | 'number' | undefined}
          />
        );
      })}
    </tr>
  );
};

export default Row;
