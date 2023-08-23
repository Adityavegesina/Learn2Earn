import React, { useState } from "react";
import { Button, Box, Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RegisterPage = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (value) => {
    console.log(value);
    setName(value);
  };
  const handleEmailChange = (value) => {
    console.log(value);
    setEmail(value);
  };
  const handleNumberChange = (value) => {
    console.log(value);
    setNumber(value);
  };
  const handleUsernameChange = (value) => {
    console.log(value);
    setUsername(value);
  };
  const handlePasswordChange = (value) => {
    console.log(value);
    setPassword(value);
  };
  const handleConfirmPasswordChange = (value) => {
    console.log(value);
    setConfirmPassword(value);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showConfirmPassword, setConfirmShowPassword] = React.useState(false);

  const handleClickShowConfirmPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            height: "820px",
            width: "400px",
            backgroundColor: "#F1F6F9",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontColor: "#F1F6F9" }}>
            REGISTER
          </Typography>
          <TextField
            error={nameError}
            onChange={(e) => {
              handleNameChange(e.target.value);
            }}
            label="Name"
            placeholder="Enter your name"
            helperText=""
            sx={{
              marginTop: "30px",
              width: "300px",
            }}
          />
          <TextField
            error={emailError}
            type="email"
            onChange={(e) => {
              handleEmailChange(e.target.value);
            }}
            label="Email ID"
            placeholder="Enter your email ID"
            helperText=""
            sx={{
              marginTop: "30px",
              width: "300px",
            }}
          />
          <TextField
            error={numberError}
            onChange={(e) => {
              handleNumberChange(e.target.value);
            }}
            label="Number"
            placeholder="Enter your number"
            helperText=""
            sx={{
              marginTop: "30px",
              width: "300px",
            }}
          />
          <TextField
            error={usernameError}
            onChange={(e) => {
              handleUsernameChange(e.target.value);
            }}
            label="Board"
            placeholder="Enter educational board"
            helperText=""
            sx={{
              marginTop: "30px",
              width: "300px",
            }}
          />
          <TextField
            error={usernameError}
            onChange={(e) => {
              handleUsernameChange(e.target.value);
            }}
            label="Address"
            placeholder="Enter Address"
            helperText=""
            sx={{
              marginTop: "30px",
              width: "300px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: "40px",
            }}
          >
            <TextField
              error={passwordError}
              onChange={(e) => {
                handlePasswordChange(e.target.value);
              }}
              sx={{ width: "300px", marginLeft: "-20px" }}
              label="Password"
              placeholder="Enter password"
              helperText=""
              type={showPassword ? "text" : "password"}
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
              sx={{ marginLeft: "-48px" }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: "40px",
            }}
          >
            <TextField
              error={confirmPasswordError}
              onChange={(e) => {
                handleConfirmPasswordChange(e.target.value);
              }}
              sx={{ width: "300px", marginLeft: "-20px" }}
              label="Confirm password"
              placeholder="Re-enter password"
              helperText=""
              type={showPassword ? "text" : "password"}
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowConfirmPassword}
              edge="end"
              sx={{ marginLeft: "-48px" }}
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>

          <Link to="/schoolhome">
            <Button
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#212A3E",
                height: "42px",
                width: "280px",
                marginTop: "38px",
              }}
            >
              Register
            </Button>
          </Link>
          <Box>
            <Typography sx={{ marginTop: "20px", marginBottom: "10px" }}>
              Are you an old user? <Link to="/loginpage">click here!!</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RegisterPage;
