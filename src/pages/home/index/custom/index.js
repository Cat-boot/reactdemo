import React from "react";
import Css from "../../../../assets/css/home/index/custom/index.css";
import hoc from "./hoc";
import IndexTitle from "../titie";
const customComponent = hoc((props) => {
    let newProps = { title: "常用应用", more: "更多", url: "custom" };
  return (
    <div className={Css["customMain"]}>
      <IndexTitle {...props} {...newProps} />
      <div className={Css["customBox"]}>
        {props.data &&
          props.data.map((item, index) => {
            return (
              <div
                key={index}
                className={Css["customItem"]}
                onClick={props.goPage.bind(this, item.url)}
              >
                {item.title}
              </div>
            );
          })
        }
      </div>
    </div>
  );
});

export default customComponent;
