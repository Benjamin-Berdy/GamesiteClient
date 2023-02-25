import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import React, { useContext,useState } from 'react';
import { AuthContext } from '../auth';

const theme = createTheme();


export default function LoginScreen() {
  const navigate = useNavigate();
  const context = useContext(AuthContext); 
  const [values, setValues] = useState({
    username: '',
    password: '',
  })
  const [errors] = useState({})


  const onChange = (event) =>{
    setValues({...values, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //loginUser();
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
            Sign In
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
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
              <Grid item xs={12}>
              <Link href="/" variant="body2" padding={6}>
                Back
               </Link>
                <Link href="/register" variant="body2">
                    Don't have an account? Register
                  </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      
    </ThemeProvider>
    
  );
}