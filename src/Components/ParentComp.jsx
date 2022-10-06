import React, { Component } from "react";
import MemoComp from "./MemoComp";
// import PureComp from "./PureComp";
// import RegularComp from "./RegularComp";

export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "joy",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "joy",
      });
    }, 2000);
  }
  render() {
    console.log("********************Parent is rendering********************");
    return (
      <div>
        <MemoComp name={this.state.name}/>
        {/* <RegularComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}
