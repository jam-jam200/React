import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  // mounting lifecycle/updating component lifecycle
  constructor(props) {
    super(props);

    this.state = {
      name: "Jessica",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // either returns a new state or null
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  componentDidMount() {
    console.log("LifeCycleA ComponentDidMount");
  }

  changeState = () => {
    this.setState({
      name: "samuel",
    });
  };

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        LifeCycle A
        <LifeCycleB />
        <button onClick={this.changeState}>change state</button>
      </div>
    );
  }
}

export default LifeCycleA;
