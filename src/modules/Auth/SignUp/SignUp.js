import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import signUpValidator from './signUpValidator';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useTranslation } from 'react-i18next';
import useNotifier from "../../../hooks/useNotifier";

const theme = createTheme();

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isRegistered, signUp, resetAuth } = useAuth();
  const { setNotification, setNotificationType } = useNotifier();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: signUpValidator(t),
    onSubmit: (values) => signUp(values),
  });


  useEffect(() => {
    if (isRegistered) {
      setNotificationType('success');
      setNotification('registered')
      navigate('/sign-in');
    }
    return () => resetAuth();
  }, [isRegistered])


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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('signIn')}
          </Typography>
          <Box
            component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label={t('firstName')}
                  autoFocus
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label={t('lastName')}
                  name="lastName"
                  autoComplete="family-name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label={t('email')}
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label={t('password')}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {t('signUp')}
            </Button>

            <NavLink to='/sign-in'>
              {t('alreadyHaveAnAccount')}
            </NavLink>


          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
