import React from "react";
import { Table, ConfigProvider } from "antd";
import Css from "../../../../assets/css/home/index/table/index.css";
import EmptyComponent from "../../../../commonents/empt";

const customizeRenderEmpty = () => <EmptyComponent />;
const TableComponent = (props) => {
  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <Table
        columns={props.columns}
        dataSource={props.dataSource}
        pagination={false}
        size="small"
        className={Css["Table"]}
        onRow={(record) => {
          return {
            onClick: () => {
              console.log(record.url);
            },
          };
        }}
        rowClassName={(record, idx) => {
          if (idx % 2 === 1) return "bg-row";
        }}
      />
    </ConfigProvider>
  );
};
export default TableComponent;
