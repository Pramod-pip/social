import * as React from "react";
import { object, string } from "yup";
import {
  TextField,
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Stack,
} from "@mui/material";
import { Form, useFormik, FormikProvider } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RegisterAPI } from "../../apis/Autentication";

const defaultTheme = createTheme();

const Register = () => {
  // const RegisterSchema = object.shape({
  //   email: string()
  //     .email("Email must be a valid email address")
  //     .required("Email is Required"),
  //   password: string().required("Password is Required"),
  // });

  const RegisterSchema = {};

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        await RegisterAPI(values.fullname, values.email, values.password);
      } catch (error) {
        console.log(error);
        resetForm();
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;
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
              <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      margin="normal"
                      fullWidth
                      type="text"
                      label="Full Name"
                      autoComplete="fullname"
                      {...getFieldProps("text")}
                      error={Boolean(touched.fullname && errors.fullname)}
                      helperText={touched.fullname && errors.fullname}
                    />
                    <TextField
                      margin="normal"
                      fullWidth
                      type="email"
                      label="Email Address"
                      autoComplete="email"
                      {...getFieldProps("email")}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    <TextField
                      margin="normal"
                      fullWidth
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      {...getFieldProps("password")}
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                    />

                    <TextField
                      margin="normal"
                      fullWidth
                      label="Confirm Password"
                      type="password"
                      autoComplete="current-password"
                      {...getFieldProps("password")}
                      error={Boolean(touched.cpassword && errors.colorpassword)}
                      helperText={touched.cpassword && errors.cpassword}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Grid container>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Already Have an Account? Sign In"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Stack>
                </Form>
              </FormikProvider>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;
