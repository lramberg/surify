import { TextField, FormControlLabel, Checkbox, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import axios from "axios";
import Button from '../components/Button/Button'
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  container: {
    backgroundColor: '#F0F3F9',
    minHeight: '100vh'
  },

  form: {
    padding: 50,
    display: "flex",
    flexDirection: "column",
    maxWidth: 700,
    margin: '5%',
    border: '1px solid black',
    fontFamily: "Menlo",
    borderRadius: '16px'

  },

  logo: {
    position: 'absolute',
    width: '94.5px',
    height: '45px',
    left: '64px',
    top: '64px',
  }
});

function PricePage() {
  const classes = useStyles();
  const [isHighRisk, setIsHighRisk] = useState(false);
  const [isLuxury, setIsLuxury] = useState(false);
  const [daysTraveling, setDaysTraveling] = useState(null);
  const [price, setPrice] = useState(0);

  async function getPrice() {
    const brokerSheetId = window.localStorage.getItem('brokerSheetId')
    
    const data = {
      'broker_sheet_id': brokerSheetId,
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
    <Grid container className={classes.container}>
      <Grid item md={3}>
        <Box 
          className={classes.logo}
          component='img'
          src='/eerie_insurance.png'
          height={40}
        />

        <Typography variant="h6">
          CHUBB
        </Typography>

        <p>Fill out the following form to receive your free Passport 360 quote</p>
          <p>
            PREPARED BY <br></br>
            Jon Snow at Erie insurance
            <br></br>
            <br></br>
            AGENCY CONTACT <br></br>
            +1 323-222-0101
          </p>    
      </Grid>
      
      <Grid md={9} item component={Paper} className={classes.form}>
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

        <Button text={'Submit'} onClick={getPrice} />
      <h2>Total Due Today: ${price}</h2>
      </Grid>
      

    </Grid>
  );
}

export default PricePage;
