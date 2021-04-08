import { makeStyles } from "@material-ui/core/styles";
import Button from "../Button/Button";
import OnboardingSteps from "../OnboardingSteps/OnbordingSteps";

const useStyles = makeStyles({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "rgba(50, 52, 54, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    position: "absolute",
    zIndex: 2,
    backgroundColor: "#FFFFFF",
    minHeight: 440,
    width: 869,
    borderRadius: 16,
  },
  logoContainer: {
    backgroundColor: "#8A60ED",
    backgroundImage: "url(/shapes.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    width: 369,
    borderRadius: "0px 16px 16px 0px",
  },
  content: {
    flex: 1,
    padding: 40,
  },
});

function handleContinue() {
  console.log("continue");
}

function OnboardingModalContainer({ toggleModal }) {
  const classes = useStyles();
  return (
    <div className={classes.overlay}>
      <div className={classes.container}>
        <div className={classes.content}>
          <OnboardingSteps />
          <Button text="Continue" onClick={handleContinue} />
        </div>
        <div className={classes.logoContainer} />
      </div>
    </div>
  );
}

export default OnboardingModalContainer;
