import React, { useState } from "react";
import { Box, Button, Typography, Grid, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const studentData = [
  {
    name: "Aditya",
    score: "1200",
  },
  {
    name: "Shreyas",
    score: "1100",
  },
  {
    name: "Utkarsh",
    score: "1000",
  },
  {
    name: "Krish",
    score: "900",
  },
  {
    name: "Ram",
    score: "800",
  },
  {
    name: "Sid",
    score: "700",
  },
  {
    name: "Raj",
    score: "600",
  },
  {
    name: "John",
    score: "500",
  },
];
const data = [
  {
    Item: "",
    Cost: "230",
  },
  {
    Item: "pencil",
    Cost: "200",
  },
  {
    Item: "pencil Box",
    Cost: "1000",
  },
];
const StudentHome = () => {
  const navigate = useNavigate();
  const [userPoints, setUserPoints] = useState(100);
  const [name, setName] = useState("Delhi Public School");
  const N = studentData.length;
  const arr = Array.from({ length: N }, (_, index) => index + 1);
  const [userName, setUserName] = useState("C.B.S.E");
  const [rollNumber, setRollNumber] = useState("Patiala, Punjab");
  const imageStyle = {
    borderRadius: "50%", // Adjust this value as needed
    width: "200px",
  };
  const shopimgStyle = {
    height: "140px",
    marginTop: "10px",
    marginLeft: "48px",
    width: "140px",
    borderRadius: "10px",
  };
  const shoppinGridStyle = {
    display: "grid",
    gridTemplateColumns: "20% 20% 20%",
    columnGap: "40px",
  };

  const boxStyle = {
    padding: "10px",
    marginLeft: "10px",
    fontSize: "16px",
  };
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e);
  };

  const handleBuy = (i) => {};

  const learningButtonClick = () => {
    navigate("/learning2");
  };

  const quizzesButtonCLick = () => {
    navigate("/quizzes");
  };
  const handleSignOut = () => {
    navigate("/");
  };
  const handleAddStudent = () => {
    navigate("/addstudentpage");
  };

  return (
    <>
      <Box sx={{ backgroundColor: "black" }}>
        <Box
          sx={{
            height: "72px",
            width: "100%",
            backgroundColor: "#212A3E",
            display: "flex",
            justifyContent: "space-between",
            color: "#FFFFFF",
            alignItems: "center",
            position: "fixed",
            overflow: "hidden",
          }}
        >
          <Box sx={{ marginLeft: "40px" }}> Learn2Earn</Box>
          <Box>
            <Button
              sx={{
                color: "white",
                marginRight: "10px",
                ":hover": { backgroundColor: "#394867" },
              }}
              onClick={learningButtonClick}
            >
              Learning material
            </Button>
            <Button
              sx={{
                color: "white",
                marginRight: "10px",
                ":hover": { backgroundColor: "#394867" },
              }}
              onClick={quizzesButtonCLick}
            ></Button>
          </Box>
          <Box sx={{ marginRight: "40px" }}>
            <Button
              sx={{
                color: "white",
                marginRight: "10px",
                ":hover": { backgroundColor: "#394867" },
              }}
              onClick={handleSignOut}
            >
              SignOut
            </Button>
          </Box>
        </Box>
        <Box sx={{ paddingTop: "73px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              height: "92vh",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "100%",
                backgroundColor: "red",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  height: "25%",
                  backgroundColor: "#394867",
                  padding: "6px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  borderRightWidth: "10px",
                  borderRightColor: "black",
                  color: "white",
                }}
              >
                <Box sx={{ marginRight: "60px", marginLeft: "30px" }}>
                  <img
                    src={"./images/dps.png"}
                    height={200}
                    style={imageStyle}
                  />
                </Box>
                <Box
                  sx={{
                    fontSize: "22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    paddingTop: "20px",
                    paddingLeft: "20px",
                  }}
                >
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
                    Institution: {name}
                  </Typography>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
                    Roll Number: {rollNumber}
                  </Typography>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
                    Board: {userName}
                  </Typography>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
                    No. of Students: {userPoints}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  height: "75%",
                  backgroundColor: "white",
                  padding: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "240px",
                    width: "100%",
                    borderRadius: "10px",
                    margin: "30px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Box sx={{ width: "240px", margin: "60px" }}>
                    <Link to="/addstudentpage">
                      <Button
                        variant="contained"
                        sx={{
                          height: "240px",
                          width: "100%",
                          borderRadius: "10px",
                          color: "black",
                          backgroundColor: "#F1F6F9",
                          ":hover": "",
                        }}
                        onClick={handleAddStudent()}
                      >
                        Add student
                      </Button>
                    </Link>
                  </Box>
                  <Box sx={{ width: "240px", margin: "60px" }}>
                    <Button
                      variant="contained"
                      sx={{
                        height: "240px",
                        width: "100%",
                        borderRadius: "10px",
                        color: "black",
                        backgroundColor: "#F1F6F9",
                        ":hover": "",
                      }}
                      // onClick={handleBuy(index)}
                    >
                      Update student marks
                    </Button>
                  </Box>
                  <Box sx={{ width: "240px", margin: "60px" }}>
                    <Link to="/generatequiz">
                      <Button
                        variant="contained"
                        sx={{
                          height: "240px",
                          width: "100%",
                          borderRadius: "10px",
                          color: "black",
                          backgroundColor: "#F1F6F9",
                          ":hover": "",
                        }}
                        // onClick={handleBuy(index)}
                      >
                        generate quiz
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "30%",
                height: "100%",
                backgroundColor: "#F1F6F9",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  width: "20%",
                  borderRightColor: "black",
                  borderRightWidth: "2px",
                }}
              >
                <Box sx={boxStyle}>Rank</Box>
                {arr.map((ele) => (
                  <Box sx={boxStyle}>{ele}</Box>
                ))}
              </Box>
              <Box sx={{ width: "50%" }}>
                <Box sx={boxStyle}>Name</Box>
                {studentData.map((ele) => (
                  <Box sx={boxStyle}>{ele.name}</Box>
                ))}
              </Box>
              <Box sx={{ width: "30%" }}>
                <Box sx={boxStyle}>Points</Box>
                {studentData.map((ele) => (
                  <Box sx={boxStyle}>{ele.score}</Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StudentHome;
