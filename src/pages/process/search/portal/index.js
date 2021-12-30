import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import hoc from "./hoc";
import Css from ".././../../../assets/css/process/search/portal/index.css";

const portalComponent = hoc((props) => {
  let aPortal = props.data.redResultURl;
  return (
    <Row className={Css["portalBox"] + " mt10 h30"}>
      <Col flex={"80px"}>
        <div
          className={
            Css["portalBOxLi"] + " " + Css["portalBOxLiActive"] + " h tc mr15"
          }
        >
          快速申请
        </div>
      </Col>
      {aPortal.length > 0
        ? aPortal.map((item, index) => {
            return (
              <Col key={index}>
                <div
                  className={Css["portalBOxLi"] + " h tc mr15"}
                  onClick={props.onClick.bind(this, item.url)}
                >
                  {item.title}
                </div>
              </Col>
            );
          })
        : ""}
      <Col flex={"50px"}>
        <div
          className={Css["portalBOxLi"] + " h tc mr15"}
          onClick={props.onClearClick.bind(this)}
        >
          清空
        </div>
      </Col>
    </Row>
  );
});
export default connect((state) => {
  return {
    state,
  };
})(portalComponent);
