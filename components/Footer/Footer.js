import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px 108px 32px",
  },
  logo: {
    height: 12,
    width: 130,
  },
  link: {
    fontSize: 11,
    lineHeight: "13px",
    fontWeight: 500,
    color: "#AABACD",
    marginLeft: 24,
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <img src="/built-on-sure.png" className={classes.logo} />
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
      </div>
    </div>
  );
}

export default Footer;
