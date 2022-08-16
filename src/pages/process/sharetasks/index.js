import React from "react";
import ShareSearch from "./search";
import ShareResult from "./result";

class worklist extends React.Component {
  render() {
    let newProps = {
      search: {},
    };
    return (
      <div>
        <ShareSearch {...this.props} {...newProps.search} />
        <ShareResult />
      </div>
    );
  }
}
export default worklist;
