import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

export default function Form() {
  const [initialInputValues, setInitailInputValues] = useState({
    email: "",
    password: "",
  });

  const [validateError, setValidateError] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(validateError, "error");
    if (initialInputValues.email === "" && initialInputValues.password === "") {
      setValidateError({
        email: "Please Enter Email",
        password: "Please Enter Password",
      });
    } else if (initialInputValues.email === "" && initialInputValues.password) {
      setValidateError({
        email: "Please Enter Email",
      });
    } else if (initialInputValues.email && initialInputValues.password === "") {
      setValidateError({
        password: "Please Enter Password",
      });
    } else {
      alert("Form Submitted");
      setInitailInputValues({
        email: "",
        password: "",
      });
    }
  };

  useEffect(() => {
    if (initialInputValues.password) {
      setValidateError({ ...validateError, password: "" });
    }
    if (initialInputValues.email) {
      setValidateError({ ...validateError, email: "" });
    }
  }, [initialInputValues]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    // console.log(value, "DDDDDDD");
    setInitailInputValues({ ...initialInputValues, [name]: value });
    // console.log(initialInputValues, "kk");
    // if (
    //   initialInputValues.email === "" &&
    //   initialInputValues.password &&
    //   e.target.value === ""
    // ) {
    //   setValidateError({ password: "Please Enter Password" });
    // } else if (
    //   initialInputValues.email &&
    //   initialInputValues.password === "" &&
    //   e.target.value === ""
    // ) {
    //   setValidateError({ email: "Please Enter Email" });
    // } else if (initialInputValues.email === "" && initialInputValues) {
    //   setValidateError({ email: "Please Enter Email" });
    // } else {
    //   setValidateError({ email: "", password: "" });
    // }
  }

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* {console.log(initialInputValues, "return")} */}
          <Typography component="h6" variant="h6">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            width="400px"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={initialInputValues.email}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            {validateError.email && (
              <Box sx={{ color: "red" }}>{validateError.email} </Box>
            )}
            {/* {console.log(validateError)} */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={initialInputValues.password}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            {validateError.password && (
              <Box sx={{ color: "red" }}>{validateError.password} </Box>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
