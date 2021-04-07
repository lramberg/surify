import Head from "next/head";
import styles from "../styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const useStyles = makeStyles({
  container: {
    height: "100%",
    background:
      "linear-gradient(180deg, #E3D9FC 0%, rgba(227, 217, 252, 0) 92.11%)",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 0px 0px 108px",
  },
  heroImg: {
    maxHeight: 650,
    height: "100%",
  },
  header: {
    fontSize: 65,
    lineHeight: "78px",
    fontWeight: 900,
    color: "#0F2042",
    width: 696,
  },
  paragraph: {
    fontSize: 18,
    lineHeight: "25px",
    fontWeight: 400,
    color: "#515E76",
    maxWidth: 696,
    margin: "24px 0px 32px 0px",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
  },
  cta: {
    fontSize: 18,
    lineHeight: "21px",
    fontWeight: 700,
    color: "#FFFFFF",
    padding: "20px 64px",
    background: "linear-gradient(228.31deg, #7540EE 21.3%, #0070FF 94.12%)",
    borderRadius: 40,
    boxShadow: "0px 4px 6px rgba(67, 90, 111, 0.301)",
    marginRight: 40,
  },
  link: {
    fontSize: 18,
    lineHeight: "21px",
    fontWeight: 700,
    color: "#7540EE",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Head>
        <title>Surify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={classes.main}>
        <div>
          <h1 className={classes.header}>Start selling insurance instantly.</h1>
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            porttitor elit vel lacinia aliquam. Donec commodo, tellus eu
            faucibus tempus, sapien lectus dapibus turpis
          </p>
          <div className={classes.buttonContainer}>
            <Link href="">
              <a className={classes.cta}>Get Started</a>
            </Link>
            <Link href="">
              <a className={classes.link}>Contact Us</a>
            </Link>
          </div>
        </div>
        <div>
          <img src="/landing.png" className={classes.heroImg} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
