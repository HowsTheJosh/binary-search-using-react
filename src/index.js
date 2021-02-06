import React from "react";
import ReactDOM from "react-dom";
import UserInput from "./UserInput";
import { iterativeFunction } from "./binarySearch";

var enableClicks = false,
  jau = false;
class App extends React.Component {
  state = {
    array: [],
    mid: 0,
  };

  renderArray() {
    const styles = {
      display: "inline-block",
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 15,
      paddingRight: 15,
      border: "1px solid white",
      borderRadius: 5,
      backgroundImage: "linear-gradient(to bottom right,purple, red)",
      margin: 3,
    };
    const val = this.state.array.map((temp, index) => {
      return (
        <div
          onClick={() => {
            console.log(enableClicks);
            if (enableClicks) {
              if (index > -1) {
                this.state.array.splice(index, 1);
                this.setState({ array: this.state.array });
                console.log(this.state.array);
              }
            }
          }}
          style={styles}
          id={`${index}`}
          key={`${index}`}
          className={"toggle"}
        >
          <h3 style={{ color: "white" }}>{temp}</h3>
          <p
            style={{
              marginTop: -15,
              marginBottom: -4,
              fontSize: 10,
              color: "white",
            }}
          >
            {index}
          </p>
        </div>
      );
    });
    return val;
  }

  helperFunc = (array, eC) => {
    //console.log(arrayFromUserInput);
    array.sort((a, b) => a - b);
    this.setState({ array });
    enableClicks = eC;
  };

  helperFunc2 = (searchVal) => {
    const elements = document.getElementsByClassName("toggle");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.pointerEvents = "none";
    }
    //console.log(this.state.array);
    console.log(typeof searchVal);

    iterativeFunction(this.state.array, parseInt(searchVal));
    document.getElementById("startAlgoButton").disabled = true;
    document.getElementById("addButton").disabled = true;
    document.getElementById("deleteButton").disabled = true;

    console.log("red");
  };

  render() {
    return (
      <div className="">
        <p style={{ textAlign: "center", color: "white", fontSize: "50px" }}>
          BINARY SEARCH
        </p>
        <div
          //className="ui segment"
          style={{
            width: "100%",
            textAlign: "center",
            paddingTop: "5",
            backgroundColor: "rgb(25,25,25)",
          }}
        >
          {this.renderArray()}
        </div>
        <UserInput
          glob={(myBool) => {
            enableClicks = myBool;
          }}
          array={this.state.array}
          sharad={this.helperFunc}
          searchInput={this.helperFunc2}
        />

        <h1>
          <p style={{ textAlign: "center", color: "white" }} id="found"></p>
        </h1>
        <p style={{ textAlign: "center", color: "white" }}>
          Quick tip : Hover on the buttons to know the functionalities
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
