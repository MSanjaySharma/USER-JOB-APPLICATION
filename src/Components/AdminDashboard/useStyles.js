const useStyles = (theme) => ({
  root: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1553356009-50faee7aa84c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    position: "",
    padding: 0,
    paddingTop: "0px",
    margin: 0,
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    width: theme.spacing(30),
  },
  divButton: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  addContainer: {
    marginTop: theme.spacing(2),
    backgroundColor: "#d9d9d9",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    borderRadius: "3px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grpButton: {
    marginBottom: theme.spacing(3),
  },
  table:{
    width:"400px"
  },
  tableRoot: {
    width: "100%",
  },
  tableContainer: {
    maxHeight: 440,
  },
});

export default useStyles;
