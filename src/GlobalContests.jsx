import React, { Component } from "react";
import "./index.css";
import Table from "./Table.jsx";
class GlobalContests extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      future_competitions: [
        { id: 1, name: "Wasif", date: 21, time: "wasif@email.com" },
        { id: 2, name: "Ali", date: 19, time: "ali@email.com" },
        { id: 3, name: "Saad", date: 16, time: "saad@email.com" },
        { id: 4, name: "Asad", date: 25, time: "asad@email.com" }
      ],
      past_competitions: [
        { id: 1, name: "Wasif", date: 21, time: "wasif@email.com" },
        { id: 2, name: "Ali", date: 19, time: "ali@email.com" },
        { id: 3, name: "Saad", date: 16, time: "saad@email.com" },
        { id: 4, name: "Asad", date: 25, time: "asad@email.com" }
      ]
    };
  }

  render() {
    return (
      <div class="narrow text-center">
        <center>
          <h3> Upcoming Global Contests</h3>
          <br></br>
          <div style={{ width: "50%" }}>
            <div style={{ minWidth: "20%" }}></div>
            <Table data={this.state.future_competitions} />
          </div>
          <br></br>
          <br></br>
          <h3> Past Global Contests</h3>
          <br></br>
          <div style={{ width: "50%" }}>
            <div style={{ minWidth: "20%" }}></div>
            <Table data={this.state.past_competitions} />
          </div>
        </center>
      </div>
    );
  }
}
export default GlobalContests;
