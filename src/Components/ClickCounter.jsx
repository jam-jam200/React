import React, { Component } from "react";

export default class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  clickHandler = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.clickHandler}>Clicked {count} times</button>
      </div>
    );
  }
}
