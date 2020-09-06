import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// import "../css/Table.css";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

class Table extends Component {
  // colFormatter = (cell, row) => {
  //   let link =
  //     "https://www.hackerrank.com/contests/green-tick-weekly-2/challenges";
  //   return { cell };
  // };
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn
            isKey
            dataField="name"
            dataAlign="center"
            width="34%"
            thStyle={{ color: "white" }}
            tdStyle={{ color: "white", textAlign: "center" }}
          >
            Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="date"
            dataAlign="center"
            width="33%"
            thStyle={{ color: "white" }}
            tdStyle={{ color: "white" }}
          >
            Date
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="time"
            dataAlign="center"
            width="33%"
            thStyle={{ color: "white" }}
            tdStyle={{ color: "white" }}
          >
            Time
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table;
