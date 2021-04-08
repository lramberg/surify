import { Select, Input, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 33,
  },
});

function OnboardingSteps() {
  const classes = useStyles();

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
  return (
    <div>
      <Step2 />
    </div>
  );
}

export default OnboardingSteps;
