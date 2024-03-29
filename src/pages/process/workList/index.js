import React from "react";
import WorkListSearch from "./search";
import WorkResult from "./result";

class worklist extends React.Component {
  render() {
    let newProps = {
      search: {},
    };
    return (
      <div>
        <WorkListSearch {...this.props} {...newProps.search} />
        <WorkResult />
      </div>
    );
  }
}
export default worklist;
