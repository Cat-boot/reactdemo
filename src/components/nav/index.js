import React from "react";
import { Row, Col, Menu, Popover} from "antd";
import hoc from "./hoc";
import IconFont from "../iconfont";
import Css from "../../assets/css/nav/index.css";
import LogoImg from "../../assets/images/nav/gat_logo.png";

const TopNavComponent = hoc((props) => {
  const PopoverContent = (
    <div className={Css["PopoverContent"]}>
      <div className={Css["PopoverContentLi"]}>
        <IconFont className={Css["userIcn"]} type="icon-gatmgrgerenzhongxin" />
        个人中心
      </div>
      <div className={Css["PopoverContentLi"]}>
        <IconFont className={Css["userIcn"]} type="icon-gatmgrchahao" />
        退出
      </div>
    </div>
  );
  return (
    <nav className={Css["topNav"]}>
      <Row align="middle">
        <Col span={4}>
          <div className={Css["topNavLogo"]}>
            <img src={LogoImg} alt={"logo"} />
          </div>
        </Col>
        <Col span={18}>
          <Menu
            onClick={props.handleClick}
            selectedKeys={props.selectedKeys}
            mode="horizontal"
            className={Css["antdMenu"]}
            forceSubMenuRender={true}
          >
            <Menu.Item key={window.base.config.path + "home/index"}>
              我的首页
            </Menu.Item>
            <Menu.Item key={window.base.config.path + "home/myApp"}>
              全部应用
            </Menu.Item>
            <Menu.Item key={window.base.config.path + "process"}>
              我的流程
            </Menu.Item>
            <Menu.Item key={window.base.config.path + "home/EHR"}>
              EHR
            </Menu.Item>
            <Menu.Item key={window.base.config.path + "home/alipay"}>
              关爱通知识库
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={2}>
            {
                !props.isLogin?
                    <div className={Css['loginBOx']}>
                        <div className={Css['loginIn']+' m5'} onClick={props.goPage.bind(this,'logo')}>登录</div>
                        <div className={Css['loginIn']+' m5'}>注册</div>
                    </div>
                    :
                    <Popover
                        overlayClassName={Css["userPopover"]}
                        content={PopoverContent}
                        trigger="click"
                        placement="bottomRight"
                    >
                        <div className={Css["userBox"]}>
                            <div className={Css["userName"]}>张三</div>
                            <IconFont
                                className={Css["topNavIcn"]}
                                type="icon-gatmgr31shezhi"
                            />
                        </div>
                    </Popover>
            }
        </Col>
      </Row>
    </nav>
  );
});
export default TopNavComponent;
