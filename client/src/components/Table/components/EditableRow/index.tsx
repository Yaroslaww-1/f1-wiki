import React from 'react';
import { Button } from 'react-bootstrap';
import { IInputTypes } from 'src/components/Input';
import { ITableColumn } from '../..';
import RowItem from '../RowItem';

interface IProps<T> {
  onEditSubmit?: (row: T) => void;
  onDelete?: (row: T) => void;
  columns: ITableColumn<T>[];
  initialValue: T;
}

const EditableRow = <T extends Record<string, IInputTypes>>({
  initialValue,
  columns,
  onEditSubmit = () => {},
  onDelete: onDeleteProps = () => {},
}: IProps<T>) => {
  const columnNames = columns.map((c) => c.name);
  const [value, setValue] = React.useState<T>(initialValue);
  const [rowElementValues, setRowElementValues] = React.useState<IInputTypes[]>([]);

  React.useEffect(() => {
    setValue(value);
  }, [initialValue]);

  React.useEffect(() => {
    setRowElementValues(columnNames.map((key) => value[key]));
  }, [value]);

  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const onEdit = () => {
    setIsEditing(true);
  };

  const onSave = () => {
    onEditSubmit(value);
    setIsEditing(false);
  };

  const onCancel = () => {
    setValue(initialValue);
    setIsEditing(false);
  };

  const onDelete = () => {
    onDeleteProps(value);
    setIsEditing(false);
  };

  const onRowElementValueEdit = (propertyName: keyof T) => (newValue: IInputTypes) => {
    setValue({
      ...value,
      [propertyName]: newValue,
    });
  };

  return (
    <tr>
      <td style={{ width: 'wrap-content' }}>
        {isEditing ? (
          <>
            <Button variant="outline-primary" onClick={onCancel} style={{ marginRight: '20px' }}>
              Cancel
            </Button>
            <Button variant="outline-success" onClick={onSave} style={{ marginRight: '20px' }}>
              Save
            </Button>
          </>
        ) : (
          <Button variant="outline-primary" onClick={onEdit} style={{ marginRight: '20px' }}>
            Edit
          </Button>
        )}

        <Button variant="outline-danger" onClick={onDelete}>
          Delete
        </Button>
      </td>
      {rowElementValues.map((value, index) => {
        return (
          <RowItem
            key={index}
            value={String(value)}
            isEditable={isEditing && columns[index].isEditable}
            onEdit={onRowElementValueEdit(columns[index].name)}
            type={typeof value as 'string' | 'number' | undefined}
          />
        );
      })}
    </tr>
  );
};

export default EditableRow;
