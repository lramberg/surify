import {
  Select,
  Input,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  header: {
    borderBottom: "1px solid #F0F3F9",
  },
  title: {
    fontSize: 20,
    lineHeight: "24px",
    fontWeight: 600,
    color: "#0F2042",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: "17px",
    color: "#8792A4",
    marginBottom: 16,
  },
  formTitle: {
    fontSize: 16,
    lineHeight: "19px",
    fontWeight: 500,
    color: "#515E76",
    marginBottom: 16,
  },
  formSubtitle: {
    fontSize: 16,
    lineHeight: "20px",
    fontWeight: 400,
    color: "#8792A4",
    marginBottom: 10,
  },
  creationText: {
    fontSize: 28,
    lineHeight: "33px",
    fontWeight: 900,
    color: "#0F2042",
    marginBottom: 8,
    textAlign: "center",
  },
  creationSubtitle: {
    fontSize: 16,
    lineHeight: "25px",
    color: "#8792A4",
    marginBottom: 40,
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 33,
  },
  image: {
    height: 108,
    width: 108,
    marginBottom: 10,
  },
  imageContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  centeredContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function OnboardingSteps({ step, toggleModal, setStep }) {
  const classes = useStyles();

  function getStepComponent(currentStep) {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      case 7:
        return <Step7 />;
      default:
        return handleSubmit();
    }
  }

  function handleSubmit() {
    toggleModal();
    setTimeout(setStep(1), 300);
  }

  function Step1() {
    return (
      <>
        <div className={classes.header}>
          <h3 className={classes.title}>Before you begin.</h3>
          <p className={classes.subtitle}>
            We need a little bit of information from you.
          </p>
        </div>
        <h4 className={classes.formTitle}>Business Information</h4>
        <p className={classes.formSubtitle}>
          Please select the the account that best describes your business
        </p>
        <div className={classes.form}>
          <Select>
            <MenuItem>Broker</MenuItem>
            <MenuItem>Agent</MenuItem>
          </Select>
          <Input placeholder="Name" />
        </div>
      </>
    );
  }

  function Step2() {
    return (
      <>
        <div className={classes.header}>
          <h3 className={classes.title}>Create your account</h3>
          <p className={classes.subtitle}>Last bits of information we need.</p>
        </div>
        <h4 className={classes.formTitle}>Contact Information</h4>
        <div className={classes.form}>
          <Input placeholder="Full Name" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Email Address" />
        </div>
        <h4 className={classes.formTitle}>Brokerage Location</h4>
        <div className={classes.form}>
          <Input placeholder="Address Line 1" />
          <Input placeholder="Address Line 2" />
        </div>
      </>
    );
  }

  function Step3() {
    return (
      <div className={classes.centeredContent}>
        <img src="/shaka-hand.png" className={classes.image} />
        <p className={classes.creationText}>
          Boom!<br></br>Your account has been created
        </p>
        <p className={classes.creationSubtitle}>
          Let's get your agency verified to sell products with our nationwide
          partners!
        </p>
      </div>
    );
  }

  function Step4() {
    return (
      <>
        <div className={classes.header}>
          <h3 className={classes.title}>Become an agent</h3>
          <p className={classes.subtitle}>
            Tell us a little bit about yourself below.
          </p>
        </div>
        <h4 className={classes.formTitle}>Agent Appointment</h4>
        <p className={classes.formSubtitle}>
          Please select the carrier you wish to partner with.
        </p>
        <div className={classes.form}>
          <Select>
            <MenuItem>Chubb</MenuItem>
            <MenuItem>Farmers</MenuItem>
          </Select>
        </div>
      </>
    );
  }

  function Step5() {
    return (
      <>
        <div className={classes.header}>
          <h3 className={classes.title}>Become an agent</h3>
          <p className={classes.subtitle}>
            Tell us a little bit about yourself below.
          </p>
        </div>
        <h4 className={classes.formTitle}>Agency Production</h4>
        <p className={classes.formSubtitle}>FEIN:</p>
        <div className={classes.form}>
          <Input placeholder="FEIN" />
        </div>
        <p className={classes.formSubtitle}>
          Has your agency ever applied for appointment or been appointed by
          Chubb?
        </p>
        <RadioGroup>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <p className={classes.formSubtitle}>
          How many Commerical Lines Producers at this agency?
        </p>
        <div className={classes.form}>
          <Input placeholder="Number of Commerical Producers" />
        </div>
        <p className={classes.formSubtitle}>
          What is your agency’s Total Commerical Volume?
        </p>
        <div className={classes.form}>
          <Input placeholder="Total Commerical Volume" />
        </div>
      </>
    );
  }

  function Step6() {
    return (
      <>
        <div className={classes.header}>
          <h3 className={classes.title}>Become an agent</h3>
          <p className={classes.subtitle}>
            Tell us a little bit about yourself below.
          </p>
        </div>
        <h4 className={classes.formTitle}>Agency Production Cont.</h4>
        <p className={classes.formSubtitle}>
          Does your agency currently have premium with Chubb placed through
          another agency, broker, or aggregator?
        </p>
        <RadioGroup>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <p className={classes.formSubtitle}>
          Please list your top 2 Commerical Insurance Carriers by total written
          premium volume:
        </p>
        <div className={clsx(classes.form, classes.header)}>
          <Input placeholder="Carrier Name" />
          <Input placeholder="Total Written Premium" />
        </div>
        <div className={classes.form}>
          <Input placeholder="Carrier Name" />
          <Input placeholder="Total Written Premium" />
        </div>
      </>
    );
  }

  function Step7() {
    return (
      <div className={classes.centeredContent}>
        <div className={classes.imageContainer}>
          <img src="/shaka-hand.png" className={classes.image} />
          <img src="/peace-hand.png" className={classes.image} />
          <img src="/rock-hand.png" className={classes.image} />
        </div>
        <p className={classes.creationText}>
          Boom!<br></br>You're all done.
        </p>
        <p className={classes.creationSubtitle}>
          We have to reach out to Chubb, to solidify everything. You will
          recieve an email when your appointment is ready. This process will
          take 24 - 48 hours!
        </p>
      </div>
    );
  }

  return <div>{getStepComponent(step)}</div>;
}

export default OnboardingSteps;
