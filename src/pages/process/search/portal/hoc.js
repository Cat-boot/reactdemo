import React from "react";
import actions from "../../../../store/actions";
function hoc(WithComponent) {
  return class hocComponent extends React.Component {
    onClick = (value) => {
      console.log(value);
    };
    onClearClick = () => {
      localStorage.removeItem("redResultURl");
      this.props.dispatch(
        actions.actResult.actResult({
          redResultURl: [],
        })
      );
      this.props.data.setAPortal();
    };
    render() {
      let newProps = {
        onClick: this.onClick.bind(this),
        onClearClick: this.onClearClick.bind(this),
      };

      return <WithComponent {...this.props} {...newProps} />;
    }
  };
}
export default hoc;
