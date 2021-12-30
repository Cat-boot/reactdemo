import React from "react";
import { connect } from "react-redux";

import hoc from "./hoc";
import Css from "../../../../assets/css/process/result/index.css";
import { Space, Divider, Button } from "antd";
const resultComponent = hoc((props) => {
  return (
    <div>
      <Divider
        className={Css["dividerPadding"]}
        plain={true}
        orientation="left"
      >
        搜索结果:
        {props.data.searchPath !== "undefined" ? props.data.searchPath : ""}
      </Divider>
      <Space size={[8, 16]} wrap className={Css["resultSpace"] + " mt10"}>
        {props.data.aResult.length > 0
          ? props.data.aResult.map((item, index) => {
              return (
                <Button
                  block
                  key={index}
                  onClick={props.resultClick.bind(this, item)}
                >
                  {item.title}
                </Button>
              );
            })
          : ""}
      </Space>
    </div>
  );
});
export default connect((state) => {
  return {
    state: state,
  };
})(resultComponent);
