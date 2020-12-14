import React from 'react';
import { FormControl } from 'react-bootstrap';

export type IInputTypes = string | number;

export type IWithInput = {
  type?: 'string' | 'number';
  onEdit?: (newValue: IInputTypes) => void;
};

type IProps = {
  initialValue?: string;
  placeholder?: string;
} & IWithInput;

const Input: React.FC<IProps> = ({
  initialValue = '',
  placeholder,
  onEdit: onEditProps = () => {},
  type = 'string',
}) => {
  const [value, setValue] = React.useState<string>(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    switch (type) {
      case 'string': {
        onEditProps(String(newValue));
        break;
      }
      case 'number': {
        onEditProps(Number(newValue));
        break;
      }
    }
  };

  return <FormControl placeholder={placeholder} onChange={onEdit} value={value} />;
};

export default Input;
