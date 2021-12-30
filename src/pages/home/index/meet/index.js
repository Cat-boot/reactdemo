import React from "react";
import { Tooltip } from "antd";
import hoc from "./hoc";
import IndexTitle from "../titie/index";
import Table from "../table";
import Css from "../../../../assets/css/home/index/meet/index.css";
const meetComponent = hoc((props) => {
  const dataSource = props.data;

  const columns = [
    {
      title: "会议名称",
      dataIndex: "name",
      key: "name",
      ellipsis: {
        showTitle: false,
      },
      render: (name) => (
        <Tooltip placement="topLeft" title={name}>
          {name}
        </Tooltip>
      ),
      width: "50%",
    },
    {
      title: "发起人",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "会议地点",
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
      title: "我的会议",
      more: "会议预约",
      url: "meet",
      border: "borderPurple",
    },
    table: {
      dataSource: dataSource,
      columns: columns,
    },
  };
  return (
    <div className={Css["meetMain"]}>
      <IndexTitle {...props} {...newProps.title} />
      <Table {...newProps.table} />
    </div>
  );
});
export default meetComponent;
