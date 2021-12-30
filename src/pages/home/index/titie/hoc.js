import React from "react";
function hoc(WithComponent) {
  return class hocComponent extends React.Component {
    gopage = (url) => {
      console.log(url);
      // this.props.history.replace(window.base.config.path + url);
    };
    render() {
      let newProps = {
        gopage: this.gopage.bind(this),
      };
      return <WithComponent {...this.props} {...newProps}></WithComponent>;
    }
  };
}
export default hoc;
