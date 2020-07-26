const useStyles = (theme) => ({
  root: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1555&q=80)",
    backgroundRepeat: "no-repeat",
    position: "sticky",
    padding: 0,
    paddingTop: "0.5px",
    margin: 0,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  container: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  top: {
    marginTop: theme.spacing(1),
  },
  dropDown: {
    background: "rgb(167, 201, 203)",
  },
  table: {
    marginTop: theme.spacing(5),
  },
});

export default useStyles;
