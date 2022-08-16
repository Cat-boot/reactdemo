import React from "react";
function hoc(WitchComponent) {
  return class hocComponent extends React.Component {
    onChange = (pageNumber) => {
      console.log("Page: ", pageNumber);
    };
    render() {
      let newProps = {
        onChange: this.onChange.bind(this),
      };
      return <WitchComponent {...this.props} {...newProps} />;
    }
  };
}
export default hoc;
