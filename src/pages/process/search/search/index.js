import React from "react";
import Css from "../../../../assets/css/process/search/search/index.css";
import { Form, Row, Col, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import hoc from "./hoc";
const searchComponent = hoc((props) => {
  const [form] = Form.useForm();
  return (
    <div className={Css["searchBox"]}>
      <Form
        form={form}
        name="search"
        onFinish={props.onFinish}
        onFinishFailed={props.onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Col span={10}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "请输入关键字搜索",
                },
              ]}
            >
              <Input placeholder="关键字搜索" allowClear />
            </Form.Item>
          </Col>
          <Col flex={"185px"} offset={1}>
            <Button
              className={"mr10"}
              type="primary"
              htmlType="submit"
              icon={<SearchOutlined />}
            >
              搜索
            </Button>
            <Button
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
export default searchComponent;
