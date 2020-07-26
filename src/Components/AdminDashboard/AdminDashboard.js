import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import useStyles from "./useStyles";
import NavBar from "./NavBar";
import ButtonGrpSearch from "./ButtonGrpSearch";
import TableComp from "./Table/Table";
import Axios from "../../config/axiosConfig";
import sort from "fast-sort";

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants: [],
      selectedOption: "Front-End Developer",
    };
  }

  componentDidMount() {
    Axios.get("/users/application-forms")
      .then((res) => {
        const applicants = res.data;
        console.log(applicants);
        this.setState({ applicants });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDataChange = (id, data) => {
    this.setState((prevState) => {
      return {
        applicants: prevState.applicants.map((applicant) => {
          if (applicant._id === id) {
            return data;
          } else {
            return applicant;
          }
        }),
      };
    });
  };

  handleButtonGrp = (option) => {
    this.setState({ selectedOption: option });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <CssBaseline />
        <Container component="main" maxWidth="lg">
          <div className={classes.paper}>
            <div className={classes.grpButton}>
              <ButtonGrpSearch
                handleButtonGrp={this.handleButtonGrp}
                selectedOption={this.state.selectedOption}
              />
            </div>
            <TableComp
              data={sort(
                this.state.applicants.filter(
                  (c) => c.jobTitle === this.state.selectedOption
                )
              ).by([{ desc: (u) => Date.parse(u.createdAt) }])}
              className={classes.table}
              handleDataChange={this.handleDataChange}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(AdminDashboard);
