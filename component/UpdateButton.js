import React from "react";
import { CommonContext } from "./CommonContext";

function UpdateButton() {
  return (
    <CommonContext.Consumer>
      {({ updateColor }) => (
        <div>
          <button onClick={() => updateColor("yellow")}>
            Update Color yellow
          </button>
          <button onClick={() => updateColor("lightblue")}>
            Update Color blue
          </button>
        </div>
      )}
    </CommonContext.Consumer>
  );
}

export default UpdateButton;
