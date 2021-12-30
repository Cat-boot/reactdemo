import React, { lazy } from "react";
import { connect } from "react-redux";
import { Empty } from "antd";
import { Scrollbars } from "react-custom-scrollbars";
import { localParam } from "../../../assets/js/utils";
const Alert = lazy(() => import("./alert"));
const Portal = lazy(() => import("./portal"));
const Search = lazy(() => import("./search"));
const Result = lazy(() => import("./result"));

class search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aAlert: "假期流程已迁移至 <a href='/message/baseinfo'>EHR</a>系统",
      bEmpty: true,
      aPortal: localStorage["redResultURl"]
        ? JSON.parse(localStorage["redResultURl"])
        : [],
      searchPath: localParam(props.location.search).search
        ? decodeURI(localParam(this.props.location.search).search.path)
        : "",
      aResult: [
        { title: "用户申请新角色1", url: "1" },
        { title: "用户申请新角色2", url: "2" },
        { title: "用户申请新角色3", url: "3" },
        { title: "用户申请新角色4", url: "4" },
        { title: "用户申请新角色5", url: "5" },
        { title: "用户申请新角色6", url: "6" },
        { title: "用户申请新角色7", url: "7" },
      ],
    };
  }
  componentDidMount() {
    this.isSearchPath();
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    this.setState(
      {
        searchPath: decodeURI(localParam(newProps.location.search).search.path),
      },
      () => {
        this.isSearchPath();
      }
    );
  }
  // 搜索值为空返回空状态
  changeResult = (values) => {
    if (values.name === "111") {
      this.setState({ bEmpty: false });
    }
  };
  //判断searchPath是否存在
  isSearchPath = () => {
    if (this.state.searchPath !== undefined) {
      this.setState({ bEmpty: true });
    }
  };
  //修改快速搜索
  setAPortal = (value = []) => {
    this.setState({ aPortal: value });
  };
  render() {
    let newProps = {
      aResult: {
        searchPath: this.state.searchPath,
        aResult: this.state.aResult,
        aPortal: this.state.aPortal,
        setAPortal: this.setAPortal.bind(this),
      },
      aPortal: {
        redResultURl: this.props.state.redResult.redResultURl,
        setAPortal: this.setAPortal.bind(this),
      },
    };
    return (
      <Scrollbars style={{ height: "100%", width: "100%", overflow: "hidden" }}>
        {this.state.aAlert ? (
          <Alert {...this.props} data={this.state.aAlert} />
        ) : (
          ""
        )}
        {this.props.state.redResult.redResultURl.length > 0 ? (
          <Portal data={newProps.aPortal} />
        ) : (
          ""
        )}

        <Search getChangeResult={this.changeResult.bind(this)} />

        {this.state.searchPath && this.state.bEmpty ? (
          <Result data={newProps.aResult} />
        ) : (
          ""
        )}
        {!this.state.bEmpty ? (
          <Empty
            description="暂无数据"
            image="//gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          />
        ) : (
          ""
        )}
      </Scrollbars>
    );
  }
}
export default connect((state) => {
  return {
    state: state,
  };
})(search);
