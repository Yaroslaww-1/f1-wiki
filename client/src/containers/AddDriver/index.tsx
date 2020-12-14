import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CreateDriverModel } from 'src/api/models/create-driver.model';
import { DriverService } from 'src/api/services/drivers.service';
import FormComponent from 'src/components/Form';

interface IProps {
  onSave: () => void;
}

const AddDriver: React.FC<IProps> = ({ onSave: onSaveProps }) => {
  const [isModalVisible, setModalVisible] = React.useState<boolean>(false);

  const onOpen = () => setModalVisible(true);
  const onClose = () => {
    setModalVisible(false);
  };

  const onSave = async (driver: CreateDriverModel) => {
    await DriverService.createDriver(driver);
    onSaveProps();
    setModalVisible(false);
  };

  return (
    <>
      <Button variant="outline-success" style={{ margin: '20px' }} onClick={onOpen}>
        Add new
      </Button>
      <Modal show={isModalVisible} onHide={onClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add driver</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComponent<CreateDriverModel>
            properties={[
              {
                name: 'name',
                type: 'string',
              },
              {
                name: 'totalSeasonPoints',
                type: 'number',
              },
              { name: 'birthday', type: 'string' },
              { name: 'nationality', type: 'number' },
              { name: 'teamID', type: 'number' },
            ]}
            onCancel={onClose}
            onSave={onSave}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddDriver;
