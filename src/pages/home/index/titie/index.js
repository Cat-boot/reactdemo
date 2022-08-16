import React from "react";
import hoc from "./hoc";
import IconFont from "../../../../components/iconfont";
import Css from "../../../../assets/css/home/index/title/index.css";

const IndexTitle = hoc((props) => {
  return (
    <div
      className={
        props.border
          ? Css["indTitleBox"] + " " + Css[props.border]
          : Css["indTitleBox"]
      }
    >
      <div className={Css["indTitleFont"]}>{props.title && props.title}</div>
      <div
        className={Css["indTitleMore"]}
        onClick={props.gopage.bind(this, props.url)}
      >
        {props.more && props.more}
        <IconFont className={Css["indTitleIcn"]} type="icon-gatmgrsanjiaoyou" />
      </div>
    </div>
  );
});

export default IndexTitle;
