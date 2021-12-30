import React from "react";
function hoc(WithComponent) {
  return class hocComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        selectedKeys: [],
        openKeys: [],
        rootSubmenuKeys: [],
      };
      this.myScroll = null;
    }
    componentDidMount() {
      this.refreshNav();
    }
    onOpenChange = (keys) => {
      const latestOpenKey = keys.find(
        (key) => this.state.openKeys.indexOf(key) === -1
      );
      if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys: keys });
      } else {
        this.setState({ openKeys: latestOpenKey ? [latestOpenKey] : [] });
      }
    };
    //点击导航
    handleClick = (e) => {
      // console.log("click ", e.key);
      this.setState({ selectedKeys: e.key });
      this.props.history.replace(e.key);
    };
    //刷新导航
    refreshNav = () => {
      // 获取当前路径
      const path = this.props.location.pathname + this.props.location.search;
      const pathname = decodeURI(path);

      //获取当前所在的目录层级
      const rank = pathname.split("/");
      switch (rank.length) {
        case 2:
          this.setState({
            selectedKeys: [pathname],
          });
          break;
        case 3:
          this.setState({
            selectedKeys: [pathname],
            openKeys: [rank.slice(0, 2).join("/")],
          });
          break;
        case 4:
          this.setState({
            selectedKeys: [pathname],
            openKeys: [rank.slice(0, 2).join("/"), rank.slice(0, 3).join("/")],
          });
          break;
        case 5:
          this.setState({
            selectedKeys: [pathname],
            openKeys: [
              rank.slice(0, 3).join("/"),
              rank.slice(0, 4).join("/"),
              rank.slice(0, 5).join("/"),
            ],
          });
          break;
        default:
          break;
      }
      // 浏览器前进后退按钮更新菜单状态
      // if (window.history && window.history.pushState) {
      //   window.onpopstate = function () {
      //     window.location.reload(true); //刷新页面
      //   };
      // }
    };

    render() {
      let newProps = {
        handleClick: this.handleClick.bind(this),
        selectedKeys: this.state.selectedKeys,
        openKeys: this.state.openKeys,
        onOpenChange: this.onOpenChange.bind(this),
      };
      return <WithComponent {...this.props} {...newProps} />;
    }
  };
}
export default hoc;
