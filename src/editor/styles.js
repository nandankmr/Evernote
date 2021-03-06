const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100vh - 35px)",
    position: "absolute",
    left: "0",
    width: "600px",
    boxShadow: "0px 0px 2px black"
  },
  titleInput: {
    height: "50px",
    boxSizing: "border-box",
    border: "none",
    padding: "5px",
    fontSize: "24px",
    width: "calc(100% - 300px)",
    backgroundColor: "#29487d",
    color: "white",
    paddingLeft: "50px"
  },
  editIcon: {
    position: "absolute",
    left: "31vw",
    top: "12px",
    color: "white",
    width: "10",
    height: "10"
  },
  editorContainer: {
    height: "70vh",
    boxSizing: "border-box"
  }
});

export default styles;
