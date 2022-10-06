import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const {name, age} = this.props
    return (
      <div>
        <h2>Welcome {name} {age}</h2>
      </div>
    );
  }
}

export default Welcome;
