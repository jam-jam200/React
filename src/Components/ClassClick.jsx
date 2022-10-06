import React, { Component } from 'react'

export default class ClassClick extends Component {
    changeHandler(){
        console.log("clicked!");
    }
  render() {
    return (
      <div>
        {/* <button onClick={this.changeHandler}>Click ME</button> */}
        
        {/* <button onClick={this.changeHandler}>Click ME</button> */}
      </div>
    )
  }
}
