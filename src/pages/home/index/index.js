import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import actions from "../../../store/actions";
import { Row, Col } from "antd";
import Css from "../../../assets/css/home/index/index.css";
const Custom = lazy(() => import("./custom/index"));
const Agent = lazy(() => import("./agent/index"));
const Notices = lazy(() => import("./notice/index"));
const Apply = lazy(() => import("./apply/index"));
const Meet = lazy(() => import("./meet/index"));
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.getACustomData();
    this.getAgentData();
    this.getNoticeData();
    this.getMeetData();
  }
  //获取常用应用数据
  getACustomData = () => {
    // let sUrl = window.base.config.baseUrl + "index/custom";
    // request(sUrl, "get").then((res) => {
    //   if (res.status === "200") {
    //     this.setState({ aCustom: res.data });
    //   }
    // });
    this.props.dispatch(actions.actCustom.actCustom());
  };
  //获取我的代办数据
  getAgentData = () => {
    this.props.dispatch(actions.actAgent.actAgent());
  };
  //获取公告数据
  getNoticeData = () => {
    this.props.dispatch(actions.actNotice.actNotice());
  };
  //获取会议数据
  getMeetData = () => {
    this.props.dispatch(actions.actMeet.actMeet());
  };
  render() {
    return (
      <Suspense fallback={<React.Fragment />}>
        <div className={Css["indeBox"]}>
          <Row className={Css["mb15"]}>
            <Col span={24}>
              <Custom
                {...this.props}
                data={
                  this.props.state.reducerCustom.aCustom &&
                  this.props.state.reducerCustom.aCustom
                }
              />
            </Col>
          </Row>
          <Row gutter={15} className={Css["mb15"]}>
            <Col span={12}>
              <Agent
                {...this.props}
                data={
                  this.props.state.redAgent.aAgent &&
                  this.props.state.redAgent.aAgent
                }
              />
            </Col>
            <Col span={12}>
              <Notices
                {...this.props}
                data={
                  this.props.state.redNotice.aNotice &&
                  this.props.state.redNotice.aNotice
                }
              />
            </Col>
          </Row>
          <Row gutter={15} className={Css["mb15"]}>
            <Col span={12}>
              <Apply
                {...this.props}
                data={
                  this.props.state.redAgent.aAgent &&
                  this.props.state.redAgent.aAgent
                }
              />
            </Col>
            <Col span={12}>
              <Meet
                {...this.props}
                data={
                  this.props.state.redMeet.aMeet &&
                  this.props.state.redMeet.aMeet
                }
              />
            </Col>
          </Row>
        </div>
      </Suspense>
    );
  }
}
export default connect((state) => {
  return {
    state: state,
  };
})(App);
