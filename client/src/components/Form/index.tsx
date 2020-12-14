import React from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import Input, { IInputTypes } from '../Input';

export interface IForm<T> {
  name: keyof T;
  type: 'string' | 'number';
}

export interface IFormProps<T> {
  properties: IForm<T>[];
  onCancel: () => void;
  onSave: (formValue: T) => void;
}

const FormComponent = <T extends Record<string, IInputTypes>>({
  properties,
  onCancel,
  onSave: onSaveProps,
}: IFormProps<T>) => {
  const [formState, setFormState] = React.useState<T>({} as T);
  const onSave = () => {
    onSaveProps(formState);
  };

  const onRowElementValueEdit = (propertyName: keyof T) => (newValue: IInputTypes) => {
    setFormState({
      ...formState,
      [propertyName]: newValue,
    });
  };

  return (
    <Form>
      <Form.Group controlId="form">
        {properties.map(({ name, type }) => (
          <>
            <Form.Label>{name}</Form.Label>
            <Input onEdit={onRowElementValueEdit(name)} type={type} />
          </>
        ))}
      </Form.Group>
      <Row>
        <Button variant="outline-primary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="outline-success" onClick={onSave}>
          Save
        </Button>
      </Row>
    </Form>
  );
};

export default FormComponent;
