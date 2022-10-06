import React, { Component } from "react";

export default class RefDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    //callback ref
    this.cbref = null;
    this.setCbRef = (element) => {
      this.cbref = element;
    };
  }

  componentDidMount() {
    if (this.cbref) {
      this.cbref.focus();
    }
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
