import { useState } from "react";
import {
  Select,
  TextField,
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

function Step1({ accountType, setAccountType, accountName, setAccountName }) {
  const classes = useStyles();

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
        <Select
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <MenuItem value="broker">Broker</MenuItem>
          <MenuItem value="agent">Agent</MenuItem>
        </Select>
        <TextField
          placeholder="Name"
          onChange={(e) => setAccountName(e.target.value)}
          value={accountName}
        />
      </div>
    </>
  );
}

function Step2({
  fullName,
  setFullName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  addressLine1,
  setAddressLine1,
  addressLine2,
  setAddressLine2,
}) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>Create your account</h3>
        <p className={classes.subtitle}>Last bits of information we need.</p>
      </div>
      <h4 className={classes.formTitle}>Contact Information</h4>
      <div className={classes.form}>
        <TextField
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
        <TextField
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
        <TextField
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <h4 className={classes.formTitle}>Brokerage Location</h4>
      <div className={classes.form}>
        <TextField
          placeholder="Address Line 1"
          onChange={(e) => setAddressLine1(e.target.value)}
          value={addressLine1}
        />
        <TextField
          placeholder="Address Line 2"
          onChange={(e) => setAddressLine2(e.target.value)}
          value={addressLine2}
        />
      </div>
    </>
  );
}

function Step3() {
  const classes = useStyles();

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

function Step4({ carrier, setCarrier }) {
  const classes = useStyles();

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
        <Select value={carrier} onChange={(e) => setCarrier(e.target.value)}>
          <MenuItem value="chubb">Chubb</MenuItem>
          <MenuItem value="farmers">Farmers</MenuItem>
        </Select>
      </div>
    </>
  );
}

function Step5({
  FEIN,
  setFEIN,
  commercialLines,
  setCommercialLines,
  commercialVolume,
  setCommercialVolume,
}) {
  const classes = useStyles();

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
        <TextField
          placeholder="FEIN"
          value={FEIN}
          onChange={(e) => setFEIN(e.target.value)}
        />
      </div>
      <p className={classes.formSubtitle}>
        Has your agency ever applied for appointment or been appointed by Chubb?
      </p>
      <RadioGroup>
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
      <p className={classes.formSubtitle}>
        How many Commerical Lines Producers at this agency?
      </p>
      <div className={classes.form}>
        <TextField
          placeholder="Number of Commerical Producers"
          value={commercialLines}
          onChange={(e) => setCommercialLines(e.target.value)}
        />
      </div>
      <p className={classes.formSubtitle}>
        What is your agency’s Total Commerical Volume?
      </p>
      <div className={classes.form}>
        <TextField
          placeholder="Total Commerical Volume"
          value={commercialVolume}
          onChange={(e) => setCommercialVolume(e.target.value)}
        />
      </div>
    </>
  );
}

function Step6({
  topCarrierName,
  setTopCarrierName,
  secondCarrierName,
  setSecondCarrierName,
}) {
  const classes = useStyles();

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
        <TextField
          placeholder="Carrier Name"
          value={topCarrierName}
          onChange={(e) => setTopCarrierName(e.target.value)}
        />
        <TextField
          placeholder="Total Written Premium"
          value={topPremium}
          onChange={(e) => setTopPremium(e.target.value)}
        />
      </div>
      <div className={classes.form}>
        <TextField
          placeholder="Carrier Name"
          value={secondCarrierName}
          onChange={(e) => setSecondCarrierName(e.target.value)}
        />
        <TextField
          placeholder="Total Written Premium"
          value={secondPremium}
          onChange={(e) => setSecondPremium(e.target.value)}
        />
      </div>
    </>
  );
}

function Step7() {
  const classes = useStyles();
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
        We have to reach out to Chubb, to solidify everything. You will recieve
        an email when your appointment is ready. This process will take 24 - 48
        hours!
      </p>
    </div>
  );
}

function OnboardingSteps({ step, toggleModal, setStep }) {
  const [accountType, setAccountType] = useState(null);
  const [accountName, setAccountName] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [addressLine1, setAddressLine1] = useState(null);
  const [addressLine2, setAddressLine2] = useState(null);
  const [carrier, setCarrier] = useState(null);
  const [FEIN, setFEIN] = useState(null);
  const [previousAppointment, setPreviousAppointment] = useState(null);
  const [commercialLines, setCommercialLines] = useState(null);
  const [commercialVolume, setCommercialVolume] = useState(null);
  const [existingPremium, setExistingPremium] = useState(null);
  const [topCarrierName, setTopCarrierName] = useState(null);
  const [topPremium, setTopPremium] = useState(null);
  const [secondCarrierName, setSecondCarrierName] = useState(null);
  const [secondPremium, setSecondPremium] = useState(null);

  function getStepComponent(currentStep) {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            accountType={accountType}
            accountName={accountName}
            setAccountType={setAccountType}
            setAccountName={setAccountName}
          />
        );
      case 2:
        return (
          <Step2
            fullName={fullName}
            setFullName={setFullName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            email={email}
            setEmail={setEmail}
            addressLine1={addressLine1}
            setAddressLine1={setAddressLine1}
            addressLine2={addressLine2}
            setAddressLine2={setAddressLine2}
          />
        );
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 carrier={carrier} setCarrier={setCarrier} />;
      case 5:
        return (
          <Step5
            FEIN={FEIN}
            setFEIN={setFEIN}
            commercialLines={commercialLines}
            setCommercialLines={setCommercialLines}
            commercialVolume={commercialVolume}
            setCommercialVolume={setCommercialVolume}
          />
        );
      case 6:
        return (
          <Step6
            topCarrierName={topCarrierName}
            setTopCarrierName={setTopCarrierName}
            secondCarrierName={secondCarrierName}
            setSecondCarrierName={setSecondCarrierName}
          />
        );
      case 7:
        return <Step7 />;
      default:
        return handleSubmit();
    }
  }

  function handleSubmit() {
    toggleModal();
    setTimeout(setStep(1), 300);
    // api call
  }

  return <div>{getStepComponent(step)}</div>;
}

export default OnboardingSteps;
