import React from "react";
import { Tooltip } from "antd";
import hoc from "./hoc";
import IndexTitle from "../titie/index";
import Table from "../table";
import Css from "../../../../assets/css/home/index/agent/index.css";
const AgentComponent = hoc((props) => {
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
      title: "我的代办",
      more: "更多",
      url: "agent",
      border: "borderBlue",
    },
    table: {
      dataSource: dataSource,
      columns: columns,
    },
  };
  return (
    <div className={Css["agentMain"]}>
      <IndexTitle {...props} {...newProps.title} />
      <Table {...newProps.table} />
    </div>
  );
});
export default AgentComponent;
