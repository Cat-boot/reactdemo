import React from "react";
function hoc(WitchComponent) {
  return class hocComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        visible: false,
        selectedRows: [],
        selectedRowKeys: "",
      };
      this.layerForm = {};
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
    onCancel = (layerForm) => {
      this.layerForm = layerForm;
      this.setState({ visible: !this.state.visible });
    };
    //弹窗提交数据
    onCreate = (from, layerForm) => {
      this.layerForm = layerForm;
      let value =
        this.state.selectedRows.length > 0
          ? this.state.selectedRows[0].name
          : "";
      // 只更新局部表单内容;
      from.setFieldsValue({
        sponsor: value,
      });
      // this.layerForm.resetFields();
      this.setState({ visible: !this.state.visible });
    };
    //弹窗表格选中
    rowSelection = (selectedRowKeys, selectedRows) => {
      this.setState({
        selectedRows: selectedRows,
        selectedRowKeys: selectedRowKeys,
      });
    };
    //弹窗搜索
    layerOnFinish = (values) => {
      console.log(values);
    };
    //清空表格
    resetFields = (form) => {
      form.resetFields();
      if (this.layerForm.resetFields) {
        this.layerForm.resetFields();
      }
      this.setState({ selectedRowKeys: "" });
    };
    render() {
      let newProps = {
        visible: this.state.visible,
        selectedRows: this.state.selectedRows,
        selectedRowKeys: this.state.selectedRowKeys,
        onFinish: this.onFinish.bind(),
        onCancel: this.onCancel.bind(),
        onCreate: this.onCreate.bind(),
        rowSelection: this.rowSelection.bind(),
        layerOnFinish: this.layerOnFinish.bind(),
        resetFields: this.resetFields.bind(),
      };
      return <WitchComponent {...this.props} {...newProps} />;
    }
  };
}
export default hoc;
