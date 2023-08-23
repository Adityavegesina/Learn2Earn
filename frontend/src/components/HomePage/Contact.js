import React, { useState } from "react";
import { Button, Box, Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Contact = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [feedback, setFeedback] = useState("");

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
  const handleFeedbackChange = (value) => {
    console.log(value);
    setFeedback(value);
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
            height: "520px",
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
            CONTACT US
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
            onChange={(e) => {
              handleFeedbackChange(e.target.value);
            }}
            label="Feedback"
            placeholder="Please provide feedback"
            helperText=""
            sx={{
              marginTop: "30px",
              width: "300px",
            }}
          />

          <Link to="/">
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
              SEND
            </Button>
          </Link>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
