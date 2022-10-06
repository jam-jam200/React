import React, { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye",
  //     });
  //   }

  clickHandler = () => {
    this.setState({
      message: "good bye",
    });
  };

  render() {
    return (
      <div>
        <h4>{this.state.message}</h4>
        {/* <button onClick={this.clickHandler.bind(this)}>CLick</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>CLick</button>
      </div>
    );
  }
}
