import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import "./Dialog.css"

function DialogBox(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="md"
    >
      <DialogTitle
        id="alert-dialog-title"
        style={{ borderBottom: "1px solid black" }}
      >
        {`${props.candidate.name}'s Profile`}
      </DialogTitle>
      <DialogContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>{props.candidate.status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: "270px" }}>Contact Number</TableCell>
              <TableCell style={{ width: "250px" }}>
                {props.candidate.phone}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>{props.candidate.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Skills</TableCell>
              <TableCell>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  {props.candidate.skills
                    ? props.candidate.skills
                        .split(",")
                        .map((skill) => <li key={skill}>{skill}</li>)
                    : ""}
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Experience</TableCell>
              <TableCell>{props.candidate.experience}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogBox;
