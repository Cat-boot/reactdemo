import React from "react";
import { Alert } from "antd";
import hoc from "./hoc";
import Css from "../../../../assets/css/process/search/alert/index.css";
const alertComponent = hoc((props) => {
  const message = (
    <div
      className={Css["alert"]}
      dangerouslySetInnerHTML={{
        __html: props.data,
      }}
    ></div>
  );
  return <Alert message={message} banner closable />;
});

export default alertComponent;
