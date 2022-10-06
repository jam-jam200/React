import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
        name: "jess",
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
      return (
        <OriginalComponent
          name={this.state.name}
          count={this.state.count}
          incrementCount={this.clickHandler}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
