import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [userType, setuserType] = useState("Please Select");

  const handleUsernameChange = (value) => {
    console.log(value);
    setUsername(value);
  };
  const handlePasswordChange = (value) => {
    console.log(value);
    setPassword(value);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSelectChange = (value) => {
    console.log(value);
    setuserType(value);
    console.log(userType);
  };

  const onSubmit = () => {
    console.log(userType === "Student");
    const loadPost = async () => {
      // await axios
      //   .get(
      //     "https://b4a5-117-203-246-41.ngrok-free.app//api/students/getstudent/64d5aeae44fb52c19a9779ec"
      //   )
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      // //   });
      // await fetch(
      //   "https://be02-117-203-246-41.ngrok-free.app/api/students/getstudent/64d5aeae44fb52c19a9779ec"
      // )
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .then((error) => {
      //     console.log(error);
      //   });
    };
    loadPost();
    if (userType === 2) {
      navigate("/studenthome");
    } else {
      navigate("/schoolhome");
    }
  };
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
            height: "480px",
            width: "400px",
            backgroundColor: "#F1F6F9",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontColor: "#F1F6F9",
              marginBottom: "18px",
            }}
          >
            LOGIN
          </Typography>

          <InputLabel
            id="demo-simple-select-label"
            sx={{ fontSize: "12px", marginLeft: "-38px", marginBottom: "10px" }}
          >
            Please let us know if you are a school or student
          </InputLabel>
          <Select
            value={userType}
            onChange={(e) => {
              handleSelectChange(e.target.value);
            }}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              width: "300px",
            }}
          >
            <MenuItem value={1}>School</MenuItem>
            <MenuItem value={2}>Student</MenuItem>
          </Select>
          <TextField
            //error
            onChange={(e) => {
              handleUsernameChange(e.target.value);
            }}
            error={usernameError}
            id="outlined-error-helper-text"
            label="Username"
            placeholder="Enter Username"
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
          <Button
            onClick={onSubmit}
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#212A3E",
              height: "42px",
              width: "280px",
              marginTop: "38px",
            }}
          >
            Login
          </Button>
          <Box>
            <Typography sx={{ marginTop: "20px", marginBottom: "10px" }}>
              Are you a new user? <Link to="/registerpage">click here!!</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
