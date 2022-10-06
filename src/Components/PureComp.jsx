import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {

  render() {
    return (
      <div>
        <h1>Pure component {this.props.name}</h1>
      </div>
    )
  }
}
