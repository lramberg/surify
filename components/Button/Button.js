import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#7540EE",
    borderRadius: 44,
    width: 210,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  text: {
    fontSize: 14,
    lineHeight: "16px",
    color: "#FFFFFF",
    fontWeight: 600,
  },
});
function Button({ text, onClick }) {
  const classes = useStyles();
  return (
    <div className={classes.button} onClick={onClick}>
      <div className={classes.text}>{text}</div>
    </div>
  );
}

export default Button;
