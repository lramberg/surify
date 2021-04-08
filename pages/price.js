import { TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    padding: 50,
    display: "flex",
    flexDirection: "column",
    maxWidth: 700,
  },
});

function PricePage() {
  const classes = useStyles();
  const [isHighRisk, setIsHighRisk] = useState(false);
  const [isLuxury, setIsLuxury] = useState(false);
  const [daysTraveling, setDaysTraveling] = useState(null);

  console.log("high", isHighRisk);
  console.log("lux", isLuxury);
  console.log("days", daysTraveling);
  const price = 500;
  return (
    <div className={classes.container}>
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
      <h2>Your Price: {price}</h2>
    </div>
  );
}

export default PricePage;
