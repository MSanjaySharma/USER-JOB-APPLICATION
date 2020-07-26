import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import View from "@material-ui/icons/Visibility";
import Reject from "@material-ui/icons/ThumbDown";
import Shortlist from "@material-ui/icons/ThumbUp";
import Button from "@material-ui/core/Button";
import DialogBox from "./Dialog";
import Axios from "../../../config/axiosConfig";
import useStyles from "../useStyles";
import columns from "./globalVar";

class TableComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 10,
      open: false,
      candidate: [],
    };
  }

  handleClickOpen = (id) => {
    Axios.get(`/users/application-form/${id}`)
      .then((res) => {
        const candidate = res.data;
        this.setState({ open: true, candidate });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: +event.target.value, page: 0 });
  };

  handleFate = (fate, id) => {
    Axios.put(`/users/application-form/update/${id}`, { status: fate })
      .then((res) => {
        const data = res.data;
        this.props.handleDataChange(id, data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.tableRoot}>
        <TableContainer className={classes.tableContainer}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.data
                .slice(
                  this.state.page * this.state.rowsPerPage,
                  this.state.page * this.state.rowsPerPage +
                    this.state.rowsPerPage
                )
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      {columns.map((column) => {
                        if (column.id === "actions") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button
                                size="small"
                                onClick={() => {
                                  this.handleClickOpen(row._id);
                                }}
                              >
                                <View />
                              </Button>
                              <Button
                                size="small"
                                color="primary"
                                disabled={row.status === "shortlisted"}
                                onClick={() => {
                                  this.handleFate("shortlisted", row._id);
                                }}
                              >
                                <Shortlist />
                              </Button>
                              <Button
                                size="small"
                                color="secondary"
                                disabled={row.status === "rejected"}
                                onClick={() => {
                                  this.handleFate("rejected", row._id);
                                }}
                              >
                                <Reject />
                              </Button>
                            </TableCell>
                          );
                        }
                        const value = row[column.id].toUpperCase();
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={this.props.data.length}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
        <DialogBox
          candidate={this.state.candidate}
          open={this.state.open}
          handleClose={this.handleClose}
        />
      </Paper>
    );
  }
}

export default withStyles(useStyles)(TableComp);
