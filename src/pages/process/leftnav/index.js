import React from "react";
import { Menu } from "antd";
import { Scrollbars } from "react-custom-scrollbars";
import hoc from "./hoc";
import Css from "../../../assets/css/process/leftNav/index.css";
import IconFont from "../../../components/iconfont";

const { SubMenu } = Menu;
const rightNav = hoc((props) => {
    // console.log(props.openKeys);
  return (
    <Scrollbars id="scrollClassify" className={Css["scrollNav"]}>
      <Menu
        className={Css["rightNav"]}
        onClick={props.handleClick}
        mode="inline"
        selectedKeys={props.selectedKeys}
        openKeys={props.openKeys}
        onOpenChange={props.onOpenChange}
      >
        <SubMenu
          icon={
            <IconFont
              type={"icon-gatmgrduojifuhe-faqishenpi"}
              className={Css["rightNavIcn"]}
            />
          }
          key={window.base.config.path + "process/search"}
          title="流程申请"
        >
          {props.aLeftNav.length > 0 && props.aLeftNav
            ? props.aLeftNav.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    {item.children === null ? (
                      <Menu.Item
                        key={
                          window.base.config.path +
                          "process/search/index?path=" +
                          item.path
                        }
                      >
                        {item.text}
                      </Menu.Item>
                    ) : (
                      <SubMenu
                        key={
                          window.base.config.path +
                          "process/search/index?path=" +
                          item.path
                        }
                        title={item.text}
                      >
                        {item.children.length > 0 && item.children
                          ? item.children.map((item2, index2) => {
                              return (
                                <Menu.Item
                                  key={
                                    window.base.config.path +
                                    "process/search/index?path=" +
                                    item2.path
                                  }
                                >
                                  {item2.text}
                                </Menu.Item>
                              );
                            })
                          : ""}
                      </SubMenu>
                    )}
                  </React.Fragment>
                );
              })
            : ""}

          {/*  <Menu.Item*/}
          {/*    key={window.base.config.path + "process/search/index?id=1-3"}*/}
          {/*  >*/}
          {/*    销售类流程*/}
          {/*  </Menu.Item>*/}
          {/*  <Menu.Item*/}
          {/*    key={window.base.config.path + "process/search/index?id=1-4"}*/}
          {/*  >*/}
          {/*    人事类流程*/}
          {/*  </Menu.Item>*/}
          {/*  <Menu.Item*/}
          {/*    key={window.base.config.path + "process/search/index?id=1-5"}*/}
          {/*  >*/}
          {/*    项目类流程*/}
          {/*  </Menu.Item>*/}
          {/*  <Menu.Item*/}
          {/*    key={window.base.config.path + "process/search/index?id=1-6"}*/}
          {/*  >*/}
          {/*    商家类流程*/}
          {/*  </Menu.Item>*/}
          {/*  <SubMenu key="sub3" title="费用类流程">*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-1"}*/}
          {/*    >*/}
          {/*      — 【0】预算外调整*/}
          {/*    </Menu.Item>*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-2"}*/}
          {/*    >*/}
          {/*      — 【1】市场项目编号*/}
          {/*    </Menu.Item>*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-3"}*/}
          {/*    >*/}
          {/*      — 【2】人事费用*/}
          {/*    </Menu.Item>*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-4"}*/}
          {/*    >*/}
          {/*      — 【3】市场费用*/}
          {/*    </Menu.Item>*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-5"}*/}
          {/*    >*/}
          {/*      — 【4】业务费用*/}
          {/*    </Menu.Item>*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-6"}*/}
          {/*    >*/}
          {/*      — 【5】行政费用*/}
          {/*    </Menu.Item>*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-7"}*/}
          {/*    >*/}
          {/*      — 【6】商家及企业付款*/}
          {/*    </Menu.Item>*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-8"}*/}
          {/*    >*/}
          {/*      — 【7】业务项目成本*/}
          {/*    </Menu.Item>*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-9"}*/}
          {/*    >*/}
          {/*      — 【8】专项研发费用*/}
          {/*    </Menu.Item>*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-10"}*/}
          {/*    >*/}
          {/*      — 【9】专项咨询费用*/}
          {/*    </Menu.Item>*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-11"}*/}
          {/*    >*/}
          {/*      — 【10】信息管理费用*/}
          {/*    </Menu.Item>*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-12"}*/}
          {/*    >*/}
          {/*      — 【11】资产采购*/}
          {/*    </Menu.Item>*/}
          {/*    <Menu.Item*/}
          {/*      key={window.base.config.path + "process/search/index?id=1-7-13"}*/}
          {/*    >*/}
          {/*      — 【12】其他费用*/}
          {/*    </Menu.Item>*/}
          {/*  </SubMenu>*/}
        </SubMenu>

        <SubMenu
          icon={
            <IconFont
              type={"icon-gatmgrguanli"}
              className={Css["rightNavIcn"]}
            />
          }
          key={window.base.config.path + "process/myProcess"}
          title="流程管理"
        >
          <Menu.Item
            key={window.base.config.path + "process/myProcess/workList"}
          >
            我的待办流程
          </Menu.Item>
          <Menu.Item
            key={window.base.config.path + "process/myProcess/shareTasks"}
          >
            共享流程
          </Menu.Item>
          <Menu.Item
            key={window.base.config.path + "process/myProcess/requestList"}
          >
            我发起的流程
          </Menu.Item>
          <Menu.Item
            key={window.base.config.path + "process/myProcess/ProcessedList"}
          >
            全部流程
          </Menu.Item>
          <Menu.Item key={window.base.config.path + "process/myProcess/drafts"}>
            草稿箱
          </Menu.Item>
        </SubMenu>
        <SubMenu
          icon={
            <IconFont type={"icon-gatmgrme"} className={Css["rightNavIcn"]} />
          }
          key="sub5"
          title="个人信息"
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <Menu.Item
          icon={
            <IconFont
              type={"icon-gatmgrOAxitong"}
              className={Css["rightNavIcn"]}
            />
          }
          key="oa"
        >
          老OA系统入口
        </Menu.Item>
      </Menu>
    </Scrollbars>
  );
});

export default rightNav;
