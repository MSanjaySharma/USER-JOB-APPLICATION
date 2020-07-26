import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import View from "@material-ui/icons/Visibility";
import Reject from "@material-ui/icons/ThumbDown";
import Shortlist from "@material-ui/icons/ThumbUp";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Axios from "axios";
import "./Table.css";

const columns = [
  { id: "name", label: "Name", minWidth: 150 },
  { id: "skills", label: "Technical Skills", minWidth: 170 },
  {
    id: "experience",
    label: "Experience",
    minWidth: 150,
    align: "right",
  },
  {
    id: "createdAt",
    label: "Applied Date",
    minWidth: 170,
    align: "center",
    format: (value) => moment(value).format("LL"),
  },
  {
    id: "tasks",
    label: "Tasks",
    minWidth: 10,
    align: "center",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable(props) {
  const rows = props.data;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [candidate, setCandidate] = React.useState({});

  const handleClickOpen = (event) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleLike = () => {
    Axios.put(
      `https://dct-application-form.herokuapp.com/users/application-form/update/${candidate._id}`,
      { status: "shortlisted" }
    )
      .then((data) => {
        console.log("succes shortlist");
        props.handleDataChange(candidate._id, "shortlisted");
        setCandidate({ hello:"ffsd" });
        console.log(candidate);
        //window.location.reload();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleReject = () => {
    Axios.put(
      `https://dct-application-form.herokuapp.com/users/application-form/update/${candidate._id}`,
      { status: "rejected" }
    )
      .then((data) => {
        console.log("succes reject");
        props.handleDataChange(candidate._id, "rejected");
        setCandidate({ ...data.data });
        console.log(candidate);
        //window.location.reload();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      if (column.id === "tasks") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Button
                              size="small"
                              onClick={() => {
                                setCandidate({ ...row });
                                handleClickOpen();
                              }}
                            >
                              <View />
                            </Button>
                            <Button
                              size="small"
                              color="primary"
                              disabled={row.status === "shortlisted"}
                              onClick={() => {
                                setCandidate({ ...row });
                                handleLike();
                              }}
                            >
                              <Shortlist />
                            </Button>
                            <Button
                              size="small"
                              color="secondary"
                              disabled={row.status === "rejected"}
                              onClick={() => {
                                setCandidate({ ...row });
                                handleReject();
                              }}
                            >
                              <Reject />
                            </Button>
                          </TableCell>
                        );
                      }
                      const value = row[column.id];
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        classes={{ root: classes.hello }}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ borderBottom: "1px solid black" }}
        >
          {`${candidate.name}'s Profile`}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TableBody>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>{candidate.status}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "270px" }}>Contact Number</TableCell>
                <TableCell style={{ width: "250px" }}>
                  {candidate.phone}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>{candidate.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Skills</TableCell>
                <TableCell>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {candidate.skills
                      ? candidate.skills
                          .split(",")
                          .map((skill) => <li key={skill}>{skill}</li>)
                      : ""}
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Experience</TableCell>
                <TableCell>{candidate.experience}</TableCell>
              </TableRow>
            </TableBody>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
