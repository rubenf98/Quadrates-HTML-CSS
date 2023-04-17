import React, { useState } from 'react';
import { Modal } from 'antd';
import {
  Form,
  Select,
  DatePicker,
} from 'antd';

const { RangePicker } = DatePicker;

const AppModal = ({ fileList, showModal, setShowModal }) => {
  const [formValues, setFormValues] = useState({});

  const handleOk = () => {
    setShowModal(false);
    console.log("Dados do formulário:", formValues);
    console.log("Imagens:", fileList);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleFormValuesChange = (changedValues, allValues) => {
    setFormValues(allValues);
  };

  return (
    <>
      <Modal title="Basic Modal" open={showModal} onOk={handleOk} onCancel={handleCancel}>
        <Form onValuesChange={handleFormValuesChange}>
          <Form.Item label="Regiao" name="regiao">
            <Select>
              <Select.Option value="Portugal">Portugal</Select.Option>
              <Select.Option value="Espanha">Espanha</Select.Option>
              <Select.Option value="Brasil">Brasil</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="RangePicker" name="rangePicker">
            <RangePicker />
          </Form.Item>
          <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              {fileList.slice(0, 5).map((file, index) => (
                <div key={file.name} style={{ width: '20%', marginRight: index === fileList.slice(0, 5).length - 1 ? '0' : '10px' }}>
                  <img src={URL.createObjectURL(file)} alt={file.name} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              ))}
            </div>
            <p>{fileList.length} arquivo(s).</p>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AppModal;
