import React from "react";
import { message } from "antd";
function hoc(WithComponent) {
  return class hocComponent extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    onFinish = (values) => {
      console.log("values of form: ", values);
      this.props.getChangeResult(values);
    };
    onFinishFailed = (values) => {
      message.error("请输入关键字搜索!");
    };
    render() {
      let newProps = {
        onFinish: this.onFinish.bind(this),
        onFinishFailed: this.onFinishFailed.bind(this),
      };
      return <WithComponent {...this.props} {...newProps} />;
    }
  };
}
export default hoc;
