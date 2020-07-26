import React from "react";
import useStyles from "./useStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

function NavBar(props) {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
        <Typography variant="h6" className={classes.title}>
          ADMIN DASHBOARD
        </Typography>
        <Grid container direction="row" justify="flex-end" spacing={1}>
          <Grid item>
            <AccountCircle fontSize="large" />
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Log Out
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(useStyles)(NavBar);
