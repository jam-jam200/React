import React, { Component } from "react";
import UpdatedComponent from "./UpdatedComponent";

class HoverCounter extends Component {
  render() {
    const { count, name, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>
          {name} Hovered {count} times
        </h1>
      </div>
    );
  }
}
export default UpdatedComponent(HoverCounter);
