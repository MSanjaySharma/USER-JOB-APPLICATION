import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "./useStyles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

class ButtonGrpSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonOptions: [
        "Front-End Developer",
        "Node.js Developer",
        "MEAN Stack Developer",
        "FULL Stack Developer",
      ],
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.divButton}>
        <ButtonGroup
          size="medium"
          color="primary"
          aria-label="outlined primary button group"
        >
          {this.state.buttonOptions.map((o, i) => (
            <Button
              key={i}
              onClick={() => this.props.handleButtonGrp(o)}
              color={this.props.selectedOption === o && "secondary"}
            >
              {o}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}

export default withStyles(useStyles)(ButtonGrpSearch);
