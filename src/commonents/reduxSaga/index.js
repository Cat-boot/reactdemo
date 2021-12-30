import React from "react";
import { connect } from "react-redux";
import actions from "../../store/actions";
class Index extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(actions.reduxAction.getNav());
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.state.reduxAction.navs.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    state,
  };
})(Index);
