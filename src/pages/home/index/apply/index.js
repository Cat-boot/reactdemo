import React from "react";
import { Tooltip } from "antd";
import hoc from "./hoc";
import IndexTitle from "../titie";
import Css from "../../../../assets/css/home/index/apply/index.css";
import Table from "../table";
const ApplyComponent = hoc((props) => {
  const dataSource = props.data;

  const columns = [
    {
      title: "流程名称/编号",
      dataIndex: "number",
      key: "number",
      ellipsis: {
        showTitle: false,
      },
      render: (number) => (
        <Tooltip placement="topLeft" title={number}>
          {number}
        </Tooltip>
      ),
      width: "50%",
    },
    {
      title: "状态",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "拥有人",
      dataIndex: "owner",
      key: "owner",
      width: "20%",
      ellipsis: true,
    },
    {
      title: "发起时间",
      dataIndex: "time",
      key: "time",
      ellipsis: true,
    },
  ];

  let newProps = {
    title: {
      title: "我的申请",
      more: "更多",
      url: "apply",
      border: "borderGreen",
    },
    table: {
      dataSource: dataSource,
      columns: columns,
    },
  };
  return (
    <div className={Css["indApplyMain"]}>
      <IndexTitle {...newProps.title} />
      <Table {...newProps.table} />
    </div>
  );
});
export default ApplyComponent;
