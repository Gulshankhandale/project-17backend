import React, { useEffect, useState } from 'react'
import { Container, Box, Avatar, Typography, Button, CssBaseline, ThemeProvider, createTheme, Card, CardContent } from '@mui/material'
import UserIcon from '@mui/icons-material/Person2Outlined';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const theme = createTheme();

function Homepage() {

  const [userData, setUserData] = useState([]);

  const { id } = useParams();

  const history = useNavigate();

  function handleLogout(){

    history('/');
    alert('Logout Successful');


  }

  useEffect(() => {
    
    axios.get(`http://localhost:5000/user/${id}`)
    .then((res)=>{
      console.log(res.data)
      setUserData(res.data);
    }).catch((error)=>{
      console.log("Something error "+error)
    })
  }, [])
  


  return <>
  <ThemeProvider theme={theme}>
  <Container component="main" maxWidth="xs">
    <CssBaseline/>
    <Box sx={{display:"flex", alignItems:"center", flexDirection:"column", marginTop:10}}>
      <Avatar sx={{m:1}}>
        <UserIcon/>
      </Avatar>
      <Typography component="h2" variant='h6'>User Details</Typography>
    </Box>
    
    <Card sx={{minWidth:275}}>
      <CardContent>
        <Typography sx={{fontSize:14}} color="text.secondary" gutterBottom>Hello User</Typography>
        <Typography>FullName: {userData.fullname}</Typography>
        <Typography>Email: {userData.email}</Typography>
        <Typography>Mobile No: {userData.MobileNo}</Typography>
        <Button variant='contained' sx={{marginTop:4}} onClick={handleLogout}>Logout</Button>
      </CardContent>

    </Card>
  </Container>
  </ThemeProvider>

  </>
}

export default Homepage;