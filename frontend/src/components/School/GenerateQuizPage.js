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

const GenerateQuizPage = () => {
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
  const [abc, setABC] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSelectChange = (value) => {
    console.log(value);
    setuserType(value);
    console.log(userType);
  };
  const handleSelectChange2 = (value) => {
    console.log(value);
    setABC(value);
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
            Generate the Quiz
          </Typography>

          <InputLabel
            id="demo-simple-select-label"
            sx={{
              fontSize: "12px",
              marginLeft: "-216px",
              marginBottom: "10px",
            }}
          >
            Choose a topic
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
            <MenuItem value={1}>Stock Market</MenuItem>
            <MenuItem value={2}>Mutual Funds</MenuItem>
          </Select>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              fontSize: "12px",
              marginLeft: "-136px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            Which standard is the test for?
          </InputLabel>
          <Select
            value={abc}
            onChange={(e) => {
              handleSelectChange2(e.target.value);
            }}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              width: "300px",
            }}
          >
            <MenuItem value={1}>8</MenuItem>
            <MenuItem value={2}>9</MenuItem>
            <MenuItem value={3}>10</MenuItem>
            <MenuItem value={4}>11</MenuItem>
            <MenuItem value={5}>12</MenuItem>
          </Select>

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
            GENERATE QUIZ
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default GenerateQuizPage;
