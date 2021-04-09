import {
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import axios from "axios";
import Button from "../components/Button/Button";
import { Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#F0F3F9",
    minHeight: "100vh",
    position: "relative",
    padding: 64,
  },

  leftSide: {
    display: "flex",
    flexDirection: "column",
  },

  form: {
    padding: 50,
    display: "flex",
    flexDirection: "column",
    maxWidth: 700,
    maxHeight: 700,
    fontFamily: "Menlo",
    borderRadius: "16px",
  },

  logo: {
    width: "94.5px",
    height: "45px",
    marginBottom: 130,
  },

  title: {
    fontSize: 18,
    lineHeight: "20px",
    margin: 0,
    marginBottom: 24,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: "20px",
    color: "#515E76",
    margin: 0,
    marginBottom: 64,
  },

  otherTitle: {
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: 600,
    color: "#515E76",
    margin: 0,
    marginBottom: 8,
  },

  otherSubtitle: {
    fontSize: 14,
    lineHeight: "20px",
    color: "#0F2042",
    margin: 0,
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 27,
  },
});

function PricePage() {
  const classes = useStyles();
  const [isHighRisk, setIsHighRisk] = useState(false);
  const [isLuxury, setIsLuxury] = useState(false);
  const [daysTraveling, setDaysTraveling] = useState(null);
  const [price, setPrice] = useState(0);

  async function getPrice() {
    const brokerSheetId = window.localStorage.getItem("brokerSheetId");

    const data = {
      broker_sheet_id: brokerSheetId,
      traveler: {
        is_high_risk_area: isHighRisk,
        total_days_traveling: daysTraveling,
        is_luxury_stay: isLuxury,
      },
    };

    try {
      await axios
        .post("https://tdwbtw.herokuapp.com/api/premiums/calculate/", data)
        .then(function (response) {
          console.log("getPrice >  successs ", response);
          setPrice(response.data.price);
        });
    } catch (error) {
      console.log("getPrice > error ", error);
    }
  }

  return (
    <Grid container className={classes.container}>
      <CssBaseline />

      <Grid item md={4} className={classes.leftSide}>
        <img className={classes.logo} src="/eerie_insurance.png" />
        <div>
          <p className={classes.title}>CHUBB</p>

          <p className={classes.subtitle}>
            Fill out the following form to receive your free Passport 360 quote
          </p>

          <div className={classes.wrapper}>
            <p className={classes.otherTitle}>PREPARED BY</p>

            <p className={classes.otherSubtitle}>Jon Snow at Erie insurance</p>
          </div>
          <div className={classes.wrapper}>
            <p className={classes.otherTitle}>AGENCY CONTACT</p>

            <p className={classes.otherSubtitle}>+1 323-222-0101</p>
          </div>
        </div>
      </Grid>

      <Grid md={8} item component={Paper} className={classes.form}>
        <h1>Here's Your Price!</h1>

        <FormControlLabel
          control={
            <Checkbox
              checked={isHighRisk}
              onChange={() => setIsHighRisk(!isHighRisk)}
            />
          }
          label="Are you traveling to a high risk area?"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={isLuxury}
              onChange={() => setIsLuxury(!isLuxury)}
            />
          }
          label="Are you staying in a luxury hotel?"
        />

        <TextField
          placeholder="Total Days Traveling"
          value={daysTraveling}
          onChange={(e) => setDaysTraveling(e.target.value)}
        />

        <h2>Total Due Today: ${price}</h2>
        <Button text={"Submit"} onClick={getPrice} />
      </Grid>
    </Grid>
  );
}

export default PricePage;
