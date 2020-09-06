import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// import "../css/Table.css";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

class Table extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn
            isKey
            dataField="name"
            dataAlign="center"
            width="60%"
            thStyle={{ color: "white" }}
            tdStyle={{ color: "white", textAlign: "left" }}
          >
            Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="date"
            dataAlign="center"
            width="20%"
            thStyle={{ color: "white" }}
            tdStyle={{ color: "white" }}
          >
            Date
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="time"
            dataAlign="center"
            width="20%"
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
