import React from "react";
import { Form, Input, Modal, Radio } from "antd";

const LayerCreateForm = (props) => {
  const { visible, onCreate, onCancel, form } = props;
  const [layerForm] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="请选择"
      okText="确认"
      cancelText="取消"
      onCancel={onCancel}
      onOk={onCreate.bind(this, layerForm, form)}
      width={1000}
    >
      <Form
        form={layerForm}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LayerCreateForm;
