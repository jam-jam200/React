import React, { Component } from "react";

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // short circuit operator
    return this.state.isLoggedIn && <div>Welcome Jessica</div>;

    // ternary operation
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Jessica</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // element variable
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Jessica</div>
    // }
    // else {
    //     message = <div>Welcome Guest</div>
    // }

    // if else
    // return <div>{message}</div>
    // if (this.state.isLoggedIn) {
    //     return <div>Welcome Jessica</div>;
    // } else {
    //      return <div>Welcome Guest</div>;
    // }
  }
}
