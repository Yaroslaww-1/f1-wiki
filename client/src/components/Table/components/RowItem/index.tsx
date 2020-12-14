import React from 'react';
import Input, { IWithInput } from 'src/components/Input';

type IProps = {
  value: string;
  isEditable: boolean;
} & IWithInput;

const RowItem: React.FC<IProps> = ({ value, isEditable, onEdit, type }) => {
  return <td>{isEditable ? <Input onEdit={onEdit} initialValue={value} type={type} /> : value}</td>;
};

export default RowItem;
