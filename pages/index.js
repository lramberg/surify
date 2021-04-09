import Head from "next/head";
import styles from "../styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import OnboardingModalContainer from "../components/OnboardingModalContainer/OnboardingModalContainer";

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
    margin: 0,
    marginBottom: 24,
  },
  subheader: {
    fontSize: 36,
    lineHeight: "45px",
    fontWeight: 700,
    color: "#0F2042",
    width: 696,
    margin: 0,
    marginBottom: 24,
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
    cursor: "pointer",
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div className={classes.container}>
      <Head>
        <title>Surify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isModalOpen && <OnboardingModalContainer toggleModal={toggleModal} />}
      <NavBar toggleModal={toggleModal} />
      <main className={classes.main}>
        <div>
          <h1 className={classes.header}>Take the broke out of brokerage.</h1>
          <h5 className={classes.subheader}>No Agency Left Behind.</h5>
          <p className={classes.paragraph}>
            Digitize your insurance business instantly with Sureify - backed by
            powerful tools that help you convert quotes, drive premiums, and
            manage policies.
          </p>
          <div className={classes.buttonContainer}>
            <div onClick={() => toggleModal()} className={classes.cta}>
              Get Started
            </div>
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
