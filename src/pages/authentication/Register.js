import * as React from "react";
import { object, string } from "yup";
import {
  TextField,
  Avatar,
  Button,
  CssBaseline,
  Paper,
  Box,
  Grid,
  Stack,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RegisterAPI } from "../../apis/Autentication";

const defaultTheme = createTheme();

const Register = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    // Add logic to store the registered user information in your mock API
    RegisterAPI.push(values);
    console.log("User registered:", values);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Full Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validate={validateForm}
              >
                <Form>
                  <Stack spacing={3}>
                    <div>
                      <Field
                        as={TextField}
                        type="text"
                        name="fullName"
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div>
                      <Field
                        as={TextField}
                        type="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div>
                      <Field
                        as={TextField}
                        type="password"
                        name="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div>
                      <Field
                        as={TextField}
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        variant="outlined"
                        fullWidth
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="error"
                      />
                    </div>

                    <Button type="submit" variant="contained" color="primary">
                      Register
                    </Button>
                  </Stack>
                </Form>
              </Formik>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;
