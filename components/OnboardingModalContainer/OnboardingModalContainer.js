import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
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
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function OnboardingModalContainer({ toggleModal }) {
  const classes = useStyles();
  const [step, setStep] = useState(1);

  function handleContinue() {
    setStep((prevStep) => prevStep + 1);
  }

  function getButtonText(step) {
    switch (step) {
      case 5:
        return "Next";
      case 6:
        return "Finalize";
      case 7:
        return "Close";
      default:
        return "Continue";
    }
  }
  return (
    <div className={classes.overlay}>
      <div className={classes.container}>
        <div
          className={clsx(
            classes.content,
            step === 3 || step === 7 ? classes.center : {}
          )}
        >
          <OnboardingSteps
            step={step}
            toggleModal={toggleModal}
            setStep={setStep}
          />
          <Button text={getButtonText(step)} onClick={handleContinue} />
        </div>
        <div className={classes.logoContainer} />
      </div>
    </div>
  );
}

export default OnboardingModalContainer;
