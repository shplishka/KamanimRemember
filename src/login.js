
import * as React from 'react';
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';


import MenuItem from '@mui/material/MenuItem';
import firebase from "firebase";
import database from "./firebase_init";
import "./login.css";
import {
    createMuiTheme,
  } from "@material-ui/core/styles";

  

const currencies = [
    {
      value: 'red',
      label: 'שיאון',
    },
    {
      value: 'yew',
      label: 'דלתון',
    },
    {
      value: 'gre',
      label: 'חרמון',
    },
    {
      value: 'bw',
      label: 'קדרון',
    },
  ];

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://AMANSTART.Herukoapp.com/">
        AMANSTART
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Login() {

  const [input_name, setInput_name] = useState("");
  const [currency, setCurrency] = useState('red');
  const history = useHistory();

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Heebo',
      ].join(','),
    },
  });
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };


  // function to add todo to our database
  const Addtodo = (event) => {
    event.preventDefault();
    if (input_name !== "") {
      database.collection("memorial").add({
        name: input_name,
        ploga:currency,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput_name("");
    history.push("/all");

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
                      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                      <SvgIcon>
      <path d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27z" />
    </SvgIcon>          </Avatar>
                     <Typography dir="rtl" component="h1" variant="h5">
                         הדלקת נר זכרון במסע קמ"נים
        </Typography>
        <Typography style={{ fontWeight: 600 }} dir="rtl" component="h1" variant="h5">
לזכרי חללי מערכות ישראל        </Typography>


          <Box component="form">
            <TextField             style={{
                    backgroundColor: "white",
                }}
            dir="rtl"
              margin="שם החלל"
                            fullWidth
              id="name"
              label="שם החלל"
              name=""
              autoFocus
              type="text"
              value={input_name}
              onChange={(event) => setInput_name(event.target.value)}
            />
          <TextField                 style={{
                    backgroundColor: "white",
                }}
          dir="rtl"
                        margin="normal"
                        fullWidth
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem style={{ color: 'black' }} key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

            <Button 
                style={{
                    backgroundColor: "white",
                    fontWeight: 600
                }}
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
          variant="outlined"
          color="primary"
          size="large"
          onClick={Addtodo}

        >
הדלק נר        </Button>

          </Box>
        </Box>
        <Grid        
      spacing={2}

>
<Typography style={{ fontWeight: 600 }} dir="rtl" component="h1" variant="h5">
רשימת החללים:        </Typography>
<div class="con" dir="rtl">
<li><a href ='https://www.kippurim.co.il/index.php?dir=site&page=casualties'>יום רביעי: מלחמת יום כיפור </a></li>
<li><a href ='https://www.idf.il/%D7%90%D7%AA%D7%A8%D7%99%D7%9D/20-%D7%A9%D7%A0%D7%94-%D7%9C%D7%90%D7%A1%D7%95%D7%9F-%D7%94%D7%9E%D7%A1%D7%95%D7%A7%D7%99%D7%9D/%D7%90%D7%A1%D7%95%D7%9F-%D7%94%D7%9E%D7%A1%D7%95%D7%A7%D7%99%D7%9D-%D7%94%D7%97%D7%9C%D7%9C%D7%99%D7%9D/'>יום חמישי: אסון המסוקים</a></li>
<li><a href ='https://zefat.gal-ed.co.il/Web/He/WarsVictims/342.aspx?page=0'>יום שישי: חללי צה"ל בבית העלמין בצפת</a></li>
<li><a href ='https://www.intelligence.org.il/?module=category&item_id=22'>יום שבת: חללי אמ"ן</a></li>
<li><a href ='https://www.idf.il/%D7%90%D7%AA%D7%A8%D7%99%D7%9D/%D7%9E%D7%9C%D7%97%D7%9E%D7%AA-%D7%A9%D7%A9%D7%AA-%D7%94%D7%99%D7%9E%D7%99%D7%9D/%D7%97%D7%9C%D7%9C%D7%99%D7%9D/'>יום ראשון: מלחמת ששת הימים</a></li>
<li><a href ='https://news.walla.co.il/item/2767615'>יום שני: צוק איתן</a></li>
  </div>
        </Grid>
        <Copyright style={{color:"white"}} sx={{ mt: 8, mb: 4 }} />

      </Container>
    </ThemeProvider>
  );
}