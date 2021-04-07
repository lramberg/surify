import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px 108px 0px",
  },
  logo: {
    height: 40,
    width: 40,
  },
  link: {
    // fontFamily: "SF Compact Display",
    fontSize: 14,
    lineHeight: "17px",
    fontWeight: 500,
    color: "#172238",
    marginRight: "48px",
  },
  cta: {
    backgroundColor: "#7540EE",
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: "17px",
    fontWeight: 700,
    padding: "11px 24px",
    borderRadius: "40px",
  },
});

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <img src="/logo.png" alt="logo" className={classes.logo} />
      </div>
      <div>
        <Link href="">
          <a className={classes.link}>Solutions</a>
        </Link>
        <Link href="">
          <a className={classes.link}>Platform Features</a>
        </Link>
        <Link href="">
          <a className={classes.link}>Resources</a>
        </Link>
        <Link href="">
          <a className={classes.link}>Company</a>
        </Link>
        <Link href="">
          <a className={classes.link}>Contact</a>
        </Link>
        <Link href="">
          <a className={classes.cta}>Get Started</a>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
