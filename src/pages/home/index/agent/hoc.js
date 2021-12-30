import React from "react";
function hoc(WithComponent) {
  return class hocComponent extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    render() {
      let newProps = {};
      return <WithComponent {...this.props} {...newProps} />;
    }
  };
}
export default hoc;
