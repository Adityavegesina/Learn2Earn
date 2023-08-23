import React, { useState } from "react";
import { Box, Button, Typography, Grid, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const data = [
  {
    Item: "pen",
    Cost: "230",
    Src: "./images/pen.jpg",
  },
  {
    Item: "pencil",
    Cost: "200",
    Src: "./images/pencil.jpg",
  },
  {
    Item: "pencil Box",
    Cost: "1000",
    Src: "./images/pencil-box.jpg",
  },
  {
    Item: "school Bag",
    Cost: "2000",
    Src: "./images/bag.jpeg",
  },
  {
    Item: "school Uniform",
    Cost: "3000",
    Src: "./images/uniform.jpg",
  },
];
const StudentHome = () => {
  const navigate = useNavigate();
  const [userPoints, setUserPoints] = useState(1200);
  const [name, setName] = useState("Shreya Rana");

  const [userName, setUserName] = useState("DAV897102017173");
  const [rollNumber, setRollNumber] = useState(102017173);
  const imageStyle = {
    borderRadius: "50%", // Adjust this value as needed
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
    gridTemplateColumns: "20% 20% 20% 20%",
    columnGap: "40px",
  };

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e);
  };
  let filteredList = data.filter((obj) => {
    return obj.Item.match(searchInput.toLowerCase());
  });

  const handleBuy = (i) => {
    console.log(filteredList[i]);
  };

  const learningButtonClick = () => {
    navigate("/learning");
  };

  const quizzesButtonCLick = () => {
    navigate("/quizzes");
  };
  const handleSignOut = () => {
    navigate("/");
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
              Learning
            </Button>
            <Button
              sx={{
                color: "white",
                marginRight: "10px",
                ":hover": { backgroundColor: "#394867" },
              }}
              onClick={quizzesButtonCLick}
            >
              Quizzes
            </Button>
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
                width: "70%",
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
                    src={"./images/rural_student.png"}
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
                    Name: {name}
                  </Typography>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
                    Roll Number: {rollNumber}
                  </Typography>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
                    UserName: {userName}
                  </Typography>
                  <Typography sx={{ fontSize: "22px", height: "40px" }}>
                    Wallet Points: {userPoints}
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
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    sx={{
                      fontSize: "32px",
                      marginTop: "10px",
                      marginLeft: "30px",
                    }}
                  >
                    Available Goodies!!!
                  </Typography>
                  <TextField
                    onChange={(e) => {
                      handleSearch(e.target.value);
                    }}
                    placeholder="Search"
                    sx={{
                      width: "300px",
                      marginLeft: "10%",
                      marginTop: "10px",
                    }}
                  />
                </Box>

                <div className="shoppingGrid" style={shoppinGridStyle}>
                  {filteredList.map((ele, index) => (
                    <Box
                      sx={{
                        height: "240px",
                        width: "100%",
                        backgroundColor: "lightgrey",
                        borderRadius: "10px",
                        margin: "30px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <img src={ele.Src} style={shopimgStyle} />

                      <br></br>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          padding: "10px",
                        }}
                      >
                        <Box>
                          {ele.Item}
                          <br></br>
                          Cost: {ele.Cost}
                        </Box>
                        <Box>
                          <Button
                            variant="contained"
                            sx={{ marginRight: "20px" }}
                            onClick={handleBuy(index)}
                          >
                            BUY
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </div>
              </Box>
            </Box>
            <Box
              sx={{
                width: "30%",
                height: "100%",
                backgroundColor: "#F1F6F9",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  height: "10%",
                  padding: "5px",
                  fontSize: "22px",
                  marginBottom: "-20px",
                }}
              >
                Have doubts!?? Ask our FinHelp chatbot and get them resolved
                easily!!!
              </Typography>
              <iframe
                width="100%"
                height="90%"
                allow="microphone https://console.dialogflow.com/api-client/demo/embedded/04a60133-ee75-47bb-84b9-f39990559a63"
                src="https://console.dialogflow.com/api-client/demo/embedded/04a60133-ee75-47bb-84b9-f39990559a63"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StudentHome;
