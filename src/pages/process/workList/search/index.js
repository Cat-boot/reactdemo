import React from "react";
import { Form, Row, Col, Input, Button, DatePicker } from "antd";
import LayerCreateForm from "./layer";
import hoc from "./hoc";
import Css from "../../../../assets/css/process/worklist/search/index.css";
const workListSearch = hoc((props) => {
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;
  return (
    <div className={Css["workListSearch"]}>
      <Form
        form={form}
        name="workListSearch"
        onFinish={props.onFinish}
        colon={false}
        labelCol={{ span: 4 }}
      >
        <Row gutter={16}>
          <Col span={10}>
            <Form.Item name={"time"} label={"发起时间"}>
              <RangePicker
                placeholder={["开始", "介绍"]}
                className={Css["RangePicker"]}
              />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item name={"processName"} label={"流程名称"}>
              <Input placeholder="请输入流程名称" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={10}>
            <Form.Item name={"keyWord"} label={"关键字"}>
              <Input placeholder="请输入关键字" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item name={"number"} label={"流水号"}>
              <Input placeholder="请输入流水号" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={10}>
            <Row gutter={16} justify={"end"}>
              <Col span={18}>
                <Form.Item name={"sponsor"} label={"发起人"}>
                  <Input placeholder="请选择发起人" />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Button type="primary" onClick={props.onCancel}>
                  选择
                </Button>
                <LayerCreateForm
                  visible={props.visible}
                  onCreate={props.onCreate}
                  onCancel={props.onCancel}
                  form={form}
                />
              </Col>
            </Row>
          </Col>
          <Col span={10}>
            <Form.Item name={"status"} label={"任务状态"}>
              <Input placeholder="请选择任务状态" />
            </Form.Item>
          </Col>
          <Col span={24} style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button
              style={{ margin: "0 8px" }}
              onClick={() => {
                form.resetFields();
              }}
            >
              清空
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
});

export default workListSearch;
