import Css from "../../assets/css/empt/index.css";
import IconFont from "../iconfont";

const emptyComponent = (props) => {
  return (
    <div className={Css["tableEmpt"]}>
      <IconFont type="icon-gatmgrkongshuju" className={Css["tableEmptIcn"]} />
      <div className={Css["tableEmptFont"]}>
        {props.data !== undefined ? props.data : "暂无数据"}
      </div>
    </div>
  );
};
export default emptyComponent;
