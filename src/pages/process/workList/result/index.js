import React from "react";
import { Table } from "antd";
import hoc from "./hoc";
import Css from "../../../../assets/css/process/worklist/result/index.css";
const WorkResult = hoc((props) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
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
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return (
    <div className={Css["resultBox"]}>
      <Table
        columns={columns}
        dataSource={data}
        total={data.length}
        pagination={{
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          pageSize: 5,
          showQuickJumper: true,
          showSizeChanger: false,
        }}
      />
    </div>
  );
});
export default WorkResult;
