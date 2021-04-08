import { TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import axios from "axios";
import Button from '../components/Button/Button'

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
  const [price, setPrice] = useState(0);

  async function getPrice() {
    const data = {
      'broker_sheet_id': '1ND9yV2xIiD07g6zKwm2aW___MRt5pwA10JB6Mv2NSWY',
      'traveler': {
        "is_high_risk_area": isHighRisk,
        "total_days_traveling": daysTraveling,
        "is_luxury_stay": isLuxury
      }
    }
    
    try {
        await axios.post('https://tdwbtw.herokuapp.com/api/premiums/calculate/', data).then(function(response) {
          console.log("getPrice >  successs ", response)
          setPrice(response.data.price)
        })
    } catch (error) {
      console.log('getPrice > error ', error)
    }
  }

  
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

      <Button text={'Submit'} onClick={getPrice} />
      <h2>Your Price: ${price}</h2>
    </div>
  );
}

export default PricePage;
