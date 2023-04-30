import "../App.css";
import React from "react";
import { CommonContext } from "./CommonContext";

class Footer extends React.Component {
  render() {
    return (
      <div className="App">
        <CommonContext.Consumer>
          {({ color }) => (
            <h1 className="footer" style={{ backgroundColor: color }}>
              This is Footer Page
            </h1>
          )}
        </CommonContext.Consumer>
      </div>
    );
  }
}

export default Footer;
