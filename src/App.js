import "./App.css";
import React from "react";
import { CommonContext } from "./component/CommonContext";
import Main from "./component/Main";
import UpdateButton from "./component/UpdateButton";
import Header from "./component/Header";
import Footer from "./component/Footer";

class App extends React.Component {
  constructor() {
    super();

    this.updateColor = (color) => {
      this.setState({ color: color });
    };

    this.state = {
      color: "lightgreen",
      updateColor: this.updateColor
    };
  }

  render() {
    return (
      <div className="App">
        <CommonContext.Provider value={this.state}>
          <Header></Header>
          <h1>This is a Common Context Provider</h1>

          <Main />
          <UpdateButton />
          <Footer></Footer>
        </CommonContext.Provider>
      </div>
    );
  }
}

export default App;
