import React, { Component } from "react";

class LifeCycleB extends Component {
  // mounting lifecycle
  constructor(props) {
    super(props);

    this.state = {
      name: "Jessica",
    };
    console.log("LifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // either returns a new state or null
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }

  componentDidMount() {
    console.log("LifeCycleB ComponentDidMount");
  }

  render() {
    console.log("LifeCycleB render");
    return <div>LifeCycle B</div>;
  }
}

export default LifeCycleB;
