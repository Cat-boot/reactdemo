/*
HashRouter:有#号
BrowserRouter:没有#号
Route：设置路由与组件关联
Switch:只要匹配到一个地址不往下匹配，相当于for循环里面的break
Link:跳转页面，相当于vue里面的router-link
exact :完全匹配路由
Redirect:路由重定向
*/
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { AuthRoute } from "./routes/private";  //会员登录认证
const TopNav = lazy(() => import("./commonents/nav"));
const indexPage = lazy(() => import("./pages/home/index/index"));
const myAppPage = lazy(() => import("./pages/home/myApp"));
const processPage = lazy(() => import("./pages/process"));

class RouterComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Switch>
              <Suspense fallback={<div className="loading" id="loading"></div>}>
                <Route path={window.base.config.path} component={TopNav} />
                <Route
                  path={window.base.config.path + "home/index"}
                  component={indexPage}
                />
                <Route
                  path={window.base.config.path + "home/myapp"}
                  component={myAppPage}
                />
                <Route
                  path={window.base.config.path + "process"}
                  component={processPage}
                />
                {/*<AuthRoute path="/user" component={UserPage}></AuthRoute>*/}
              </Suspense>
            </Switch>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}
export default RouterComponent;
