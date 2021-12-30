import React from "react";
import actions from "../../../../store/actions";
function hoc(WithComponent) {
  return class hocComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    resultClick = (value) => {
      let temAPortal = this.props.data.aPortal;
      //去重
      for (let i in temAPortal) {
        if (temAPortal[i] === value) {
          temAPortal.splice(i--, 1);
        }
      }
      //倒序
      temAPortal.unshift(value);
      //限制数量
      if (temAPortal.length > 5) {
        temAPortal.pop();
      }
      localStorage["redResultURl"] = JSON.stringify(temAPortal);
      this.props.data.setAPortal(temAPortal);
      this.props.dispatch(
        actions.actResult.actResult({
          redResultURl: temAPortal,
        })
      );
    };
    render() {
      let newProps = { resultClick: this.resultClick.bind(this) };
      return <WithComponent {...this.props} {...newProps} />;
    }
  };
}
export default hoc;
