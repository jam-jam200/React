import React, { Component } from "react";
import UpdatedComponent from "./UpdatedComponent";

class ClickCounter extends Component {
  render() {
    const { count, name, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {name} {this.props.school} Clicked {count} times
        </button>
      </div>
    );
  }
}
export default UpdatedComponent(ClickCounter);
