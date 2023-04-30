import React from "react";
import { CommonContext } from "./CommonContext";

class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <CommonContext.Consumer>
          {({ color }) => (
            <h1 style={{ backgroundColor: color }}>This is Header Page</h1>
          )}
        </CommonContext.Consumer>
      </div>
    );
  }
}

export default Header;
