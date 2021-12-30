import React from "react";
import Css from "./style.module.css";
class headerComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className={Css["app"] + " " + Css["active"]}>
        导航
        <div className={Css["asd"]}>asd</div>
      </div>
    );
  }
}
export default headerComponent;
