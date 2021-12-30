import React from "react";
import EmptyComponent from "../../../commonents/empt";
class myAppPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div>
        {this.state.data.length > 0 ? (
          "asd"
        ) : (
          <EmptyComponent data={"没有权限"} />
        )}
      </div>
    );
  }
}
export default myAppPage;
