import React from "react";
import { lazyImg } from "../../assets/js/utils";
function hoc(WithComponent) {
  return class hocComponent extends React.Component {
    constructor() {
      super();
      this.state = {
          selectedKeys: [],
          openKeys: [],
          isLogin:false,
          isModalVisible:true
      };
    }
    componentDidMount() {
      this.layImg();
      this.refreshNav();
      this.pronto();
    }

    //点击切换导航
    handleClick = (e) => {
      this.setState({ selectedKeys: e.key }, () => {
        if (e.key === window.base.config.path + "process") {
          this.props.history.replace(
            window.base.config.path + "process/search/index"
          );
        } else {
          this.props.history.replace(e.key);
        }
      });
    };
    //刷新导航
    refreshNav = () => {
      // 获取当前路径
      let pathname =
        this.props.location.pathname === window.base.config.path
          ? window.base.config.path + "home/index"
          : this.props.location.pathname === window.base.config.path + "home"
          ? window.base.config.path + "home/index"
          : this.props.location.pathname === window.base.config.path + "home/"
          ? window.base.config.path + "home/index"
          : this.props.location.pathname;

      //获取当前所在的目录层级
      const rank = pathname.split("/");
      //rank = ["","policy-engine","nas-client"]

      //当前导航默认状态
      if (rank.slice(0, 2).join("/") === window.base.config.path + "process") {
        pathname = window.base.config.path + "process";
      }
      switch (rank.length) {
        case 2: //一级目录
          this.setState({
            selectedKeys: [pathname],
          });
          break;
        case 3: //二级目录，要展开一个subMenu
          this.setState({
            selectedKeys: [pathname],
            // openKeys: [rank.slice(0, 2).join("/")],
          });
          break;
        case 4: //三级目录，要展开两个subMenu
          this.setState({
            selectedKeys: [pathname],
            // openKeys: [rank.slice(0, 2).join("/"), rank.slice(0, 3).join("/")],
          });
          break;
        default:
          break;
      }
    };
    layImg = () => {
      //图片懒加载
      setTimeout(() => {
        lazyImg();
      }, 10);
    };
    //默认指向导航
    pronto = () => {
      if (
        this.props.location.pathname === window.base.config.path ||
        this.props.location.pathname + "/" === window.base.config.path ||
        this.props.location.pathname === window.base.config.path + "home" ||
        this.props.location.pathname === window.base.config.path + "home/"
      ) {
        this.props.history.replace(window.base.config.path + "home/index");
      }
      if (
        this.props.location.pathname === window.base.config.path + "process" ||
        this.props.location.pathname === window.base.config.path + "process/" ||
        this.props.location.pathname ===
          window.base.config.path + "process/search" ||
        this.props.location.pathname ===
          window.base.config.path + "process/search/"
      ) {
        this.props.history.replace(
          window.base.config.path + "process/search/index"
        );
      }
      if (
        this.props.location.pathname ===
          window.base.config.path + "process/myProcess" ||
        this.props.location.pathname ===
          window.base.config.path + "process/myProcess/"
      ) {
        this.props.history.replace(
          window.base.config.path + "process/myProcess/workList"
        );
      }
    };
    //跳转页面
      goPage = (v) =>{
          switch (v){
              case 'logo':
                  return (
                     this.props.history.replace(window.base.config.path+'login')
                  );
              default :
                  return null;
          }
      }
    render() {
      let newProps = {
          handleClick: this.handleClick.bind(this),
          goPage:this.goPage.bind(this),
          selectedKeys: this.state.selectedKeys,
          openKeys: this.state.openKeys,
          isLogin: this.state.isLogin,
      };
      return <WithComponent {...this.props} {...newProps}></WithComponent>;
    }
  };
}
export default hoc;
