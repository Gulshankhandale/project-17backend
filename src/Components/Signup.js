import React, { useState } from 'react'
import { ThemeProvider, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, createTheme } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const theme = createTheme();

function Signup() {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName ] = useState("");
  const [email, setEmail ] = useState("");
  const [MobileNo, setMobileNo ] = useState(0);
  const [password, setPassword] = useState("");

  const history = useNavigate();

  function postData(){

    axios.post("http://localhost:5000/add", {
      email,
      fullname:firstname+" "+lastname,
      MobileNo,
      password,

    }).then((res)=>{

      console.log(res.data)
      alert(res.data)
    }).catch((error)=>{
      console.log("Something error "+error)
    })

    history('/');
  }


  return <>
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <Box sx={{marginTop:8, display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Avatar sx={{m:1, bgcolor:"secondary.main"}}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant='h5'>Sign Up</Typography>
        <Box component="form" noValidate sx={{mt:3}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete='given-name' name='firstName' required fullWidth id='first-name' label="First Name" autoFocus onChange={((e)=>setFirstName(e.target.value))}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete='family-name' name='lastName' required fullWidth id='lastname' label="Last Name" onChange={((e)=>setLastName(e.target.value))}/>
            </Grid>
            <Grid item xs={12}>
              <TextField autoComplete='email-address' name='email' required fullWidth id='email' label="Email" onChange={((e)=>setEmail(e.target.value))}/>
            </Grid>
            <Grid item xs={12}>
              <TextField autoComplete='phone-number' name="phone" required fullWidth id='phone' label="Mobile No" type="number" onChange={((e)=>setMobileNo(e.target.value))}/>
            </Grid>
            <Grid item xs={12}>
              <TextField autoComplete='new-password' name='password' required fullWidth id='password' label="Password" type="password" onChange={((e)=>setPassword(e.target.value))} />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary"/>} label="I agree to terms & conditions"/>
            </Grid>
          </Grid>
          <Button variant='contained' fullWidth sx={{mt:3, mb:2}} onClick={postData}>Sign Up</Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href='/' variant="body2">Already have an account?Sign In</Link>
            </Grid>
          </Grid>
        </Box>

      </Box>
    
     

    </Container>

  </ThemeProvider>
  </>
}

export default Signup;