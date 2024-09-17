import React from "react";

const min = 0;
const max = 10;

class MinMax extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curCount: min };
  }

  inc = () => {
    this.setState((prevState) => ({ curCount: prevState.curCount + 1 }));
    if (this.state.curCount >= max) {
      this.state.curCount = max - 1;
    }
  };

  minus = () => {
    this.setState((nextState) => ({ curCount: nextState.curCount - 1 }));
    if (this.state.curCount <= min) {
      this.state.curCount = min + 1;
    }
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.minus}>
          {" "}
          -{" "}
        </button>
        <input type="text" value={this.state.curCount}/>
        <button type="button" onClick={this.inc}>
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

export default MinMax;
