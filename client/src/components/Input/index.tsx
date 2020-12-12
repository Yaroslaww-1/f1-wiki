import React from 'react';
import { FormControl } from 'react-bootstrap';

interface IProps {
  placeholder: string;
  onEdit: (newValue: string) => void;
}

const Input: React.FC<IProps> = ({ placeholder, onEdit: onEditProps }) => {
  const onEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onEditProps(newValue);
  };

  return <FormControl placeholder={placeholder} onChange={onEdit} />;
};

export default Input;
