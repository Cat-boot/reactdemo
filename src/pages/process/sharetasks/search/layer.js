import React from "react";
import { Form, Input, Modal, Table, Row, Col, Button } from "antd";

const LayerCreateForm = (props) => {
  const {
    visible,
    onCreate,
    onCancel,
    form,
    rowSelection,
    layerOnFinish,
    selectedRowKeys,
  } = props;
  const [layerForm] = Form.useForm();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "5",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "6",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "7",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "8",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",
    },
  ];
  return (
    <Modal
      visible={visible}
      title="请选择"
      okText="确认"
      cancelText="取消"
      onCancel={onCancel.bind(this, layerForm)}
      onOk={onCreate.bind(this, form, layerForm)}
      width={1000}
    >
      <Form
        form={layerForm}
        name="form_in_modal"
        labelCol={{ span: 4 }}
        onFinish={layerOnFinish.bind(this)}
      >
        <Row gutter={20} align={"right"}>
          <Col span={8}>
            <Form.Item name="number" label="工号">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="name" label="姓名">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20} align={"right"}>
          <Col span={8}>
            <Form.Item name="userName" label="用户名">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="phone" label="手机号">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                搜索
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table
        rowSelection={{
          type: "radio",
          onChange: rowSelection,
          selectedRowKeys: selectedRowKeys,
        }}
        columns={columns}
        dataSource={data}
        scroll={{ y: "30vh", x: "100%" }}
      />
    </Modal>
  );
};

export default LayerCreateForm;
