import React from "react";
import { Tooltip } from "antd";
import hoc from "./hoc";
import Css from "../../../../assets/css/home/index/notice/index.css";
import IndexTitle from "../titie";
import Table from "../table";
const NoticeComponent = hoc((props) => {
  const dataSource = props.data;

  const columns = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      ellipsis: {
        showTitle: false,
      },
      render: (number) => (
        <Tooltip placement="topLeft" title={number}>
          {number}
        </Tooltip>
      ),
      width: "50%",
      className: "asd",
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author",
      className: "asd",
    },
    {
      title: "发起时间",
      dataIndex: "time",
      key: "time",
      className: "asd",
      ellipsis: true,
    },
  ];
  let newProps = {
    title: {
      title: "公告栏",
      more: "更多",
      url: "notice",
      border: "borderOrigin",
    },
    table: {
      dataSource: dataSource,
      columns: columns,
    },
  };
  return (
    <div className={Css["indNotMain"]}>
      <IndexTitle {...newProps.title} />
      <Table {...newProps.table} />
    </div>
  );
});
export default NoticeComponent;
