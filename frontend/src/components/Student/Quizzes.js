import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Quizzes = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/studenthome");
  };
  const handleClick = () => {
    navigate("/quizpage");
  };
  return (
    <Box>
      <Box
        sx={{
          height: "72px",
          width: "100%",
          backgroundColor: "#212A3E",
          display: "flex",
          justifyContent: "space-evenly",
          color: "#FFFFFF",
          alignItems: "center",
          position: "fixed",
          overflow: "hidden",
          color: "#FFFFFF",
        }}
      >
        <IconButton
          onClick={handleBack}
          sx={{ color: "white", marginLeft: "-760px" }}
        >
          <KeyboardBackspaceIcon sx={{ fontSize: "52px" }} />
        </IconButton>
        <Button sx={{ color: "white", fontSize: "22px" }}>QUIZZES</Button>
      </Box>
      <Box sx={{ paddingTop: "72px" }}>
        <Typography
          sx={{
            fontSize: "24px",
            padding: "10px",
            marginLeft: "12px",
            marginTop: "12px",
          }}
        >
          Available Quizzes
        </Typography>
        <Box
          sx={{
            margin: "20px",
            height: "20vh",
            width: "150vh",
            backgroundColor: "#9BA4B5",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: "42px" }}>QUIZ - 3</Typography>
            <Typography sx={{ fontSize: "16px" }}>
              Topic: Mutual Funds
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "#00FF00",
                color: "black",
                marginRight: "40px",
                padding: "20px",
                width: "200px",
                fontSize: "22px",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
              onClick={handleClick}
            >
              START
            </Button>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "24px",
            padding: "10px",
            marginLeft: "12px",
            marginTop: "12px",
          }}
        >
          Past Quizzes
        </Typography>
        <Box
          sx={{
            margin: "20px",
            height: "20vh",
            width: "150vh",
            backgroundColor: "#9BA4B5",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              //   alignItems: "center",
              marginLeft: "20px",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: "42px" }}>QUIZ - 2</Typography>
            <Typography sx={{ fontSize: "16px" }}>
              Topic: Introduction to Stock Market
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "#00FF00",
                color: "black",
                marginRight: "40px",
                padding: "20px",
                width: "200px",
                fontSize: "22px",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              RE-TAKE
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            margin: "20px",
            height: "20vh",
            width: "150vh",
            backgroundColor: "#9BA4B5",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              //   alignItems: "center",
              marginLeft: "20px",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: "42px" }}>QUIZ - 1</Typography>
            <Typography sx={{ fontSize: "16px" }}>
              Topic: Introduction to Finances
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "#00FF00",
                color: "black",
                marginRight: "40px",
                padding: "20px",
                width: "200px",
                fontSize: "22px",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              RE-TAKE
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Quizzes;
