import React, { Component } from "react";

export default class HoverCounter extends Component {
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
        <h1 onMouseOver={this.clickHandler} onCopy={this.clickHandler}>
          Hovered {count} times
        </h1>
       
      </div>
    );
  }
}
