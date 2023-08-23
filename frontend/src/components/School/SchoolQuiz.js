import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  IconButton,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  FormControl,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const data = [
  {
    Question: "Which of the following is not a direct tax?",
    option1: "Sales tax",
    option2: "Income tax",
    option3: "Wealth tax",
    option4: "Estate tax",
  },
  {
    Question: "Which of the following is not a direct tax?",
    option1: "Sales tax",
    option2: "Income tax",
    option3: "Wealth tax",
    option4: "Estate tax",
  },
  {
    Question: "Which of the following is not a direct tax?",
    option1: "Sales tax",
    option2: "Income tax",
    option3: "Wealth tax",
    option4: "Estate tax",
  },
  {
    Question: "Which of the following is not a direct tax?",
    option1: "Sales tax",
    option2: "Income tax",
    option3: "Wealth tax",
    option4: "Estate tax",
  },
  {
    Question: "Which of the following is not a direct tax?",
    option1: "Sales tax",
    option2: "Income tax",
    option3: "Wealth tax",
    option4: "Estate tax",
  },
];

const QuizPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/studenthome");
  };
  return (
    <Box>
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
          color: "#FFFFFF",
        }}
      >
        <IconButton
          onClick={handleBack}
          sx={{ color: "white", marginLeft: "" }}
        >
          <KeyboardBackspaceIcon sx={{ fontSize: "52px" }} />
        </IconButton>
        <Button sx={{ color: "white", fontSize: "22px" }}>QUIZPAGE</Button>
        <Link to="/quizzes">
          <Button
            sx={{
              color: "white",
              marginRight: "10px",
              fontSize: "18px",
              ":hover": { backgroundColor: "#394867" },
            }}
          >
            Submit
          </Button>
        </Link>
      </Box>
      <Box sx={{ paddingTop: "72px" }}>
        {data.map((ele, index) => (
          <form>
            <FormControl sx={{ m: 3 }} variant="standard">
              <FormLabel id="demo-error-radios">{ele.Question}</FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                // value={}
                // onChange={}
              >
                <FormControlLabel
                  value={ele.option1}
                  control={<Radio />}
                  label={ele.option1}
                />
                <FormControlLabel
                  value={ele.option2}
                  control={<Radio />}
                  label={ele.option2}
                  s
                />
                <FormControlLabel
                  value={ele.option3}
                  control={<Radio />}
                  label={ele.option3}
                />
                <FormControlLabel
                  value={ele.option4}
                  control={<Radio />}
                  label={ele.option4}
                />
              </RadioGroup>
            </FormControl>
          </form>
        ))}
      </Box>
    </Box>
  );
};

export default QuizPage;
