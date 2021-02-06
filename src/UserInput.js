import React from "react";

class UserInput extends React.Component {
  state = { val: "", searchIn: "" };

  updateNumber = (e) => {
    const num = e.target.value;
    if (e.target.validity.valid) {
      this.setState({ val: e.target.value });
    } else if (num === "" || num === "-") {
      this.setState({ val: num });
    }
  };
  updateNumber2 = (e) => {
    const num = e.target.value;
    if (e.target.validity.valid) {
      this.setState({ searchIn: e.target.value });
    } else if (num === "" || num === "-") {
      this.setState({ val: num });
    }
  };

  addnum = () => {
    if (this.state.val) {
      this.props.sharad([...this.props.array, parseInt(this.state.val)], false);
      document.getElementById("myInput").value = "";
      this.setState({ val: "" });
      document.getElementById("found").innerHTML = "";
    } else {
      document.getElementById("found").innerHTML =
        "Please enter a number to insert!";
    }
  };

  addnum2 = () => {
    if (this.state.searchIn) {
      this.props.searchInput(this.state.searchIn);
      //document.getElementById("searchInput").value = "";
      //this.setState({ val: "" });
      //document.getElementById("found").innerHTML = "";
    } else {
      document.getElementById("found").innerHTML =
        "Please enter a number to find!";
    }
  };

  removenum = () => {
    this.props.glob(true);
  };

  render() {
    return (
      <div className="ui grid " style={{ paddingTop: "10%" }}>
        <div className="six wide column" style={{ display: "table" }}>
          <div
            className="ui input"
            style={{
              display: "table",
              textAlign: "center",
              verticalAlign: "middle",
              marginLeft: "20%",
            }}
          >
            <input
              type="text"
              value={this.state.val}
              onChange={this.updateNumber}
              pattern="^-?[0-9]\d*\.?\d*$"
              id="myInput"
              placeholder={"Enter the numbers"}
            />
          </div>
          <div
            data-position="bottom center"
            data-tooltip="Enter number one at a time and hit me ;)"
            style={{
              display: "table",
              textAlign: "center",
              verticalAlign: "middle",
              paddingTop: 5,
              marginLeft: "37%",
            }}
          >
            <button className="ui button" onClick={this.addnum} id="addButton">
              Insert
            </button>
          </div>
        </div>
        <div className="four wide column" style={{ display: "table" }}>
          <div
            data-position="bottom center"
            data-tooltip="Hit me and click on the elements to delete!"
            style={{
              display: "table",
              textAlign: "center",
              verticalAlign: "middle",
              paddingTop: 50,
              paddingLeft: 40,
            }}
          >
            <button
              className="ui button"
              onClick={this.removenum}
              id="deleteButton"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="six wide column" style={{ display: "table" }}>
          <div
            className="ui input"
            style={{
              display: "table",
              textAlign: "center",
              verticalAlign: "middle",
              marginLeft: "15%",
            }}
          >
            <input
              type="text"
              value={this.state.searchIn}
              onChange={this.updateNumber2}
              pattern="^-?[0-9]\d*\.?\d*$"
              id="seachInput"
              placeholder={"Enter the numbers to find"}
            />
          </div>
          <div
            data-position="bottom center"
            data-tooltip="Enter the element to find and hit me"
            style={{
              display: "table",
              textAlign: "center",
              verticalAlign: "middle",
              paddingTop: 5,
              marginLeft: "24%",
            }}
          >
            <button
              className="ui button"
              onClick={this.addnum2}
              id="startAlgoButton"
            >
              Run Algorithm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;
