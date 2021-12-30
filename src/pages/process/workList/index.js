import React from "react";
import WorkListSearch from "./search";

class worklist extends React.Component {
  render() {
    let newProps = {
      search: {},
    };
    return (
      <div>
        <WorkListSearch {...this.props} {...newProps.search} />
      </div>
    );
  }
}
export default worklist;
