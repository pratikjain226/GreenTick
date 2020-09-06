import React, { Component } from "react";
import "./index.css";
import Table from "./Table.jsx";
class GreenTickWeekly extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      future_weekly: [
        {
          id: 1,
          name: "GreenTick Weekly Contest-4",
          date: "20/09/2020",
          time: "3:00 PM - 5:00 PM IST"
        },
        {
          id: 2,
          name: "GreenTick Weekly Contest-3",
          date: "13/09/2020",
          time: "3:00 PM - 5:00 PM IST"
        }
      ],
      past_weekly: [
        {
          id: 1,
          name: "GreenTick Weekly Contest-2",
          date: "06/09/2020",
          time: "3:00 PM - 5:00 PM IST"
        },
        {
          id: 2,
          name: "GreenTick Weekly Contest-1",
          date: "30/08/2020",
          time: "3:00 PM - 5:00 PM IST"
        }
      ]
    };
  }

  render() {
    return (
      <div class="narrow text-center">
        <center>
          <h3> Upcoming GreenTick Contests</h3>
          <br></br>
          <div style={{ width: "50%" }}>
            <div style={{ minWidth: "20%" }}></div>
            <Table data={this.state.future_weekly} />
          </div>

          <br></br>
          <br></br>
          <h3> Past GreenTick Contests</h3>
          <br></br>
          <div style={{ width: "50%" }}>
            <div style={{ minWidth: "20%" }}></div>
            <Table data={this.state.past_weekly} />
          </div>
        </center>
      </div>
    );
  }
}
export default GreenTickWeekly;
