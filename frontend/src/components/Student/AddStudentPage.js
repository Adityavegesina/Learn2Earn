import React, { useState } from "react";
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

const AddStudentPage = () => {
  //   const navigate = useNavigate();
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
    // console.log(userType === "Student");
    // if (userType === 2) {
    //   navigate("/studenthome");
    // } else {
    //   navigate("/schoolhome");
    // }
  };
  return (
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
          Add Student
        </Typography>

        <TextField
          //error
          onChange={(e) => {
            handleUsernameChange(e.target.value);
          }}
          error={usernameError}
          id="outlined-error-helper-text"
          label="Name"
          placeholder="Enter student name"
          helperText=""
          sx={{
            marginTop: "30px",
            width: "300px",
          }}
        />
        <TextField
          //error
          onChange={(e) => {
            handleUsernameChange(e.target.value);
          }}
          error={usernameError}
          id="outlined-error-helper-text"
          label="Roll No."
          placeholder="Enter student roll no."
          helperText=""
          sx={{
            marginTop: "30px",
            width: "300px",
          }}
        />
        <TextField
          //error
          onChange={(e) => {
            handleUsernameChange(e.target.value);
          }}
          error={usernameError}
          id="outlined-error-helper-text"
          label="Standard(Year)"
          placeholder="Enter the students year"
          helperText=""
          sx={{
            marginTop: "30px",
            width: "300px",
          }}
        />
        <Link to="/schoolhome">
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
            Add Student
          </Button>
        </Link>
        <Box>
          <Typography sx={{ marginTop: "20px", marginBottom: "10px" }}>
            Want to add multiple students <Link to="">click here!!</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AddStudentPage;
