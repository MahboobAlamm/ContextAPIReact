import React from "react";
import { CommonContext } from "./CommonContext";

class Main extends React.Component {
  render() {
    return (
      <div className="App">
        <CommonContext.Consumer>
          {({ color }) => (
            <h1 style={{ backgroundColor: color }}>This is Main Page</h1>
          )}
        </CommonContext.Consumer>
      </div>
    );
  }
}

export default Main;
