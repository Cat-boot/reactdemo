import React from "react";
function hoc(WitchComponent) {
  return class hocComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        visible: false,
        layerName: "",
      };
    }
    //搜索
    onFinish = (value) => {
      const rangeValue = value["time"] !== undefined ? value["time"] : [];
      const time = [];
      if (rangeValue.length > 0) {
        for (let i in rangeValue) {
          time[i] = rangeValue[i].format("YYYY-MM-DD");
        }
      }
      value["time"] = time;
      console.log(value);
    };
    //显示隐藏弹窗
    onCancel = () => {
      this.setState({ visible: !this.state.visible });
    };
    //弹窗提交数据
    onCreate = (layerForm, from) => {
      layerForm
        .validateFields()
        .then((values) => {
          console.log("弹窗数据: ", values);
          //只更新局部表单内容
          from.setFieldsValue({
            sponsor: values.title,
          });
          //隐藏弹窗
          this.setState({ visible: !this.state.visible });
        })
        .catch((info) => {
          console.log("错误的消息:", info);
        });
    };
    render() {
      let newProps = {
        visible: this.state.visible,
        onFinish: this.onFinish.bind(),
        onCancel: this.onCancel.bind(),
        onCreate: this.onCreate.bind(),
      };
      return <WitchComponent {...this.props} {...newProps} />;
    }
  };
}
export default hoc;
