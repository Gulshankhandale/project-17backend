import React, { useState } from 'react'
import { ThemeProvider, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container, createTheme, Link} from '@mui/material';
import LockedOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useNavigate();

    function postLogin(){

        axios.post("http://localhost:5000/login", {

        email,
        password
        }).then((res)=>{
            console.log(res.data)
            alert(res.data.message);
        }).catch((error)=>{
            console.log("Something error "+error)
        })

        history('/homepage')
    }


  return <>
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box sx={{marginTop:8, display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Avatar sx={{m:1, bgcolor:"secondary.main"}}>
                <LockedOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant='h5'>
                Sign In
            </Typography>
            <Box component="form" noValidate sx={{mt:1}} >
                <TextField margin='normal' required fullWidth id='email' label="email-address" name='email' autoComplete='email' autoFocus onChange={((e)=>setEmail(e.target.value))}/>
                <TextField margin='normal' required fullWidth id='password' label="password" name='password' autoComplete='current-password' onChange={((e)=>setPassword(e.target.value))}/>
                <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Remember Me"/>
                <Button variant='contained' fullWidth sx={{mt:3, mb:2}} onClick={postLogin}>Sign In</Button>
                <Grid container>
                    <Grid item xs>
                        <Link href='#' variant='body2'>Forgot Password?</Link>
                    </Grid>
                    <Grid item>
                        <Link href='/signup' variant='body2'>Don't have an account ?Sign Up</Link>
                    </Grid>
                </Grid>

            </Box>

        </Box>

    </Container>

  </ThemeProvider>
  </>
}

export default Login;