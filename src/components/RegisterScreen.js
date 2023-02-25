import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import React, { useContext,useState } from 'react';
import {AuthContext} from '../auth'

const theme = createTheme();

export default function RegisterScreen() {
  const context = useContext(AuthContext); 
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [errors] = useState({})


  
  const onChange = (event) =>{
    setValues({...values, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //addUser();
    navigate('/');
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
            backgroundColor: 'white',
            padding:3
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  value={values.username}
                  error={errors.username ? true : false}
                  onChange={onChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={values.password}
                  error={errors.password ? true : false}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  autoComplete="new-confirmpassword"
                  value={values.confirmPassword}
                  error={errors.confirmPassword ? true : false}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {Object.keys(errors).length > 0 &&(
              <div>
              <ul className="list">
                {Object.values(errors).map(value => (
                  <li key={value}>{value}</li>
                  ))}
              </ul>
            </div>
            )}

            <Grid container justifyContent="flex-end">
                <Grid item xs = {12}>
                    <Link href="/" variant="body2" padding = {6}>
                    Back
                    </Link>
                    <Link href="/login" variant="body2">
                    Already have an account? Sign in
                    </Link>
              </Grid>   
            </Grid>
          </Box>
        </Box>
      </Container>
      
    </ThemeProvider>
  );
}