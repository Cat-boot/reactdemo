import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Css from "../../assets/css/process/index.css";
import request from "../../assets/js/utils/request";
const LeftNav = lazy(() => import("./leftnav"));
const Search = lazy(() => import("./search"));
const workList = lazy(() => import("./workList"));
const { Sider, Content } = Layout;

class processComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      aLeftNav: {},
    };
  }
  componentDidMount() {
    this.getLeftNavData();
  }
  //获取左侧导航数据
  getLeftNavData = () => {
    let url =
      window.base.config.baseUrls + "myprocess/getProcessClassificationV2";
    let headersConfig = {
      "X-Authenticated-Userid": "1",
    };
    request(url, "post", headersConfig).then((res) => {
      if (res.code === 0) {
        this.setState({ aLeftNav: res.data });
      }
    });
  };
  render() {
    let newProps = {
      leftNav: {
        aLeftNav: this.state.aLeftNav,
      },
    };
    return (
      <Suspense fallback={<React.Fragment />}>
        <Layout className={Css["processBox"]}>
          <Sider className={Css["processItemNav"]} width={250}>
            <LeftNav {...this.props} {...newProps.leftNav} />
          </Sider>
          <Content className={Css["processItemSearch"]}>
            <Switch>
              <Suspense fallback={<div></div>}>
                <Route
                  path={window.base.config.path + "process/search/index"}
                  component={Search}
                />
                <Route
                  path={window.base.config.path + "process/myProcess/workList"}
                  component={workList}
                />
              </Suspense>
            </Switch>
          </Content>
        </Layout>
      </Suspense>
    );
  }
}
export default processComponent;
