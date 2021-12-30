import React from "react";
function hoc(WihComponent) {
  return class hocComponent extends React.Component {
    gopage = (url) => {
      console.log(url);
      //this.props.history.replace(window.base.config.path + url);
    };
    render() {
      let newProps = {
        goPage: this.gopage.bind(this),
      };
      return <WihComponent {...this.props} {...newProps}></WihComponent>;
    }
  };
}
export default hoc;
