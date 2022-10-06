import React, { Component } from "react";

export default class CounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}

/**in app.js
 * <CounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterTwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <User render={(isLoggedIn) => (isLoggedIn ? "Jessica" : "Guest")} />
 */
