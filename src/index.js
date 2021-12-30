// IE polyfill解决ie9/10/11白屏
import "./polyfill";
import "core-js/es";
import "mutation-observer";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "babel-polyfill"; //ie转es6 兼容ie

import "url-search-params-polyfill"; //axios兼容低版本浏览器
import React from "react";
import ReactDOM from "react-dom";
import RouterComponent from "./router";
import "./assets/js/config/globa"; //引入全局变量
import { Provider } from "react-redux";
import store from "./store";
import { ConfigProvider } from "antd";
import locale from "antd/lib/locale-provider/zh_CN";
import "./assets/css/common/public.css";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <ConfigProvider locale={locale}>
      <Provider store={store}>
        <RouterComponent></RouterComponent>
      </Provider>
    </ConfigProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
